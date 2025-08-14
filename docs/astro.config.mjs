import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeObsidian from 'starlight-theme-obsidian'

export default defineConfig({
    integrations: [
        starlight({
            plugins: [starlightThemeObsidian({
                   backlinks: false,
                   graph: false
            })],
            title: 'My Docs',
        }),
    ],
})