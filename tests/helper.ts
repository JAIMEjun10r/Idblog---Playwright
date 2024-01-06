import { Page, expect } from '@playwright/test';
import _ from 'lodash';

export class Helper {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verificaLinks(listaNomes) {
        // Aguarde o elemento #menu-menu-principal estar visível
        await this.page.waitForSelector('#menu-menu-principal');

        // Itera sobre a lista de nomes
        for (const nome of listaNomes) {
            // Encontre o elemento que contém o nome
            const linkSeletor = `#menu-menu-principal:has-text("${nome}")`;
            const link = await this.page.$(linkSeletor);

            // Verifica se o elemento existe
            if (!link) {
                // Se o link for nulo, lance uma exceção indicando que o elemento não foi encontrado
                throw new Error(`Elemento não encontrado para o nome: ${nome}`);
            }

            // Verifica se o elemento possui a propriedade href
            const href = await link.getAttribute('href');

            // Verifica se o href é definido
            expect(href).toBeDefined();

            // Verifica se o elemento está visível
            const linkVisivel = await link.isVisible();
            expect(linkVisivel).toBeTruthy();
        }
    }

    async menu(nome) {
        const selector = this.page.locator('#menu-menu-principal').getByRole('link', { name: nome })
        await selector.click()
    }

    async titulo(frase) {
        await expect(this.page).toHaveTitle(frase)
    }

    async url(endereco) {
        await expect(this.page).toHaveURL(endereco)
    }

    async emailAleatorio() {

        const nomes = ["joao", "maria", "pedro", "kleber", "roberto", "vinicius", "rafael"];
        const caracteresEspeciais = ["_"];
        const provedoresEmail = ["@gmail.com", "@bol.com", "@gov.br", "@globo.com", "@mercado.com.br"];
        const nomeAleatorio = _.sample(nomes);
        const caracteresAleatorios = _.sample(caracteresEspeciais);
        const provedorAleatorio = _.sample(provedoresEmail);
        const emailGerado = `${nomeAleatorio}${caracteresAleatorios}${provedorAleatorio}`;
        return emailGerado;
    }
}


