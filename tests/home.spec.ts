import { test, expect } from '@playwright/test';
import { Helper } from './helper';
const listaNomesPrincipal = ['Compliance', 'KYC', 'Mercado Financeiro', 'Varejo', 'Transporte', 'Identidade', 'Onboarding', 'Privacidade', 'Outros'];
const listaNomesOutros = ['Background Check', 'Onboarding', 'Anti-fraude', 'Inovação', 'Notícias', 'Institucional', 'Podcast'];
test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('link', { name: 'Blog idwall' })).toBeVisible();
});

// test.afterEach(async({ page }) =>{
//   await page.close();
// })

test('Navegar e verificar links', async ({ page }) => {
  const helper = new Helper(page)
  await helper.verificaLinks(listaNomesPrincipal)
  
});

test('Navegar para a página Compliance', async({ page }) => {
  const helper = new Helper(page)
  await helper.menu('Compliance')
  await helper.titulo('Arquivos Compliance : Blog idwall')
  await helper.url('/category/outros/compliance/')
  
});

test('Navegar para a página KYC', async ({ page }) => {
  const helper = new Helper(page)
  await helper.menu('KYC')
  await helper.titulo('Arquivos KYC : Blog idwall')
  await helper.url('/category/outros/kyc/')
});

test('Navegar para a página Mercado Financeiro', async ({ page }) => {
  const helper = new Helper(page)
  await helper.menu('Financeiro')
  await helper.titulo('Arquivos Mercado Financeiro : Blog idwall')
  await helper.url('/category/outros/mercado-financeiro/')
});

test('Navegar para a página Varejo', async ({ page }) => {
  const helper = new Helper(page)
  await helper.menu('Varejo')
  await helper.titulo('Arquivos Varejo : Blog idwall')
  await helper.url('/category/outros/varejo/')
});

test('Navegar para a página Transporte', async ({ page }) => {
  const helper = new Helper(page)
  await helper.menu('Transporte')
  await helper.titulo('Arquivos Transporte : Blog idwall')
  await helper.url('/category/outros/transporte-outros/')
});

test('Navegar para a página Identidade', async ({ page }) => {
  const helper = new Helper(page)
  await helper.menu('Identidade')
  await helper.titulo('Arquivos Identidade : Blog idwall')
  await helper.url('/category/outros/identidade/')
});

test('Navegar para a página Onboarding', async ({ page }) => {
  const helper = new Helper(page)
  await helper.menu('Onboarding')
  await helper.titulo('Arquivos Onboarding : Blog idwall')
  await helper.url('/category/outros/onboarding/')
});

test('Navegar para a página Privacidade', async ({ page }) => {
  const helper = new Helper(page)
  await helper.menu('Privacidade')
  await helper.titulo('Arquivos Privacidade e Segurança')
  await helper.url('/category/outros/privacidade-e-seguranca/')
});

test('Navegar para a página Outros', async ({ page }) => {
  const helper = new Helper(page)
  await helper.menu('Outros')
  await helper.titulo('Arquivos Outros : Blog idwall')
  await helper.url('/category/outros/')
});

test.only('Verificar links no submenu "Outros"', async ({ page }) => {
  const helper = new Helper(page)
  await page.getByRole('link', { name: 'Outros ' }).hover();
  await helper.verificaLinks(listaNomesOutros)
  
 
});




