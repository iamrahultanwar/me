module.exports = async function myPlugin(context, options) {
    return {
        name: 'in-app-editor',
        extendCli(cli) {
            cli
                .command('editor')
                .description('Editor to create docs in browser')
                .action(() => {

                    console.log("TODO");
                });
        },

    };
};