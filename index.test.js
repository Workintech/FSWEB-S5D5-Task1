import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { apiKey } from './index.js';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const script = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');

beforeAll(async () => {
  dom = new JSDOM(html, { runScripts: 'dangerously' });
  container = dom.window.document;

  let scriptElement = dom.window.document.createElement('script');
  scriptElement.textContent = script;
  scriptElement.setAttribute('type', 'module');

  dom.window.document.head.appendChild(scriptElement);
});

test('Görev 1: ApiKey başarı ile tanımlanmış.', async () => {
  expect(apiKey).not.toBe('YOUR_API_KEY');
});

test('Görev 2: ApiKey gerçekten çalışıyor.', async () => {
  const apiUrl = `https://www.omdbapi.com/?t=Starwars&apikey=${apiKey}`;
  const response = await axios.get(apiUrl);
  expect(response.data).toHaveProperty('Title', 'Starwars: Goretech');
});
