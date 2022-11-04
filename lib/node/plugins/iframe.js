"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vitePageIframe = void 0;
const utils_1 = require("@vuepress/utils");
const vitePageIframe = (app) => {
    return {
        name: '@bfehub/vuepress-plugin-code-block:iframe',
        async config(config) {
            const input = config.build.rollupOptions.input;
            const inputs = [];
            if (typeof input === 'string') {
                inputs.push(input);
            }
            else if (typeof input === 'object') {
                inputs.push(...Object.values(input));
            }
            else if (Array.isArray(input)) {
                inputs.push(...input);
            }
            inputs.push(app.dir.temp('vite-root/-iframe.html'));
            config.build.rollupOptions.input = inputs;
            await app.writeTemp('vite-root/-iframe.html', utils_1.fs
                .readFileSync(app.env.isBuild
                ? app.options.templateBuild
                : app.options.templateDev)
                .toString()
                .replace(/<\/body>/, `\
<script type="module">
import '@bfehub/vuepress-plugin-code-block/lib/client-iframe/app'
</script>
</body>`));
        },
    };
};
exports.vitePageIframe = vitePageIframe;
