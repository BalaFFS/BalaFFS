const core = require('@actions/core');

async function run() {
    try {
        // Read actions inputs
        const textToPrint = core.getInput('text-to-print');

        core.info(textToPrint);
        
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();