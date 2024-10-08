const { exec } = require('child_process');

const pullLatestChanges = () => {
    return new Promise((resolve, reject) => {
        exec('git pull https://github.com/PhantomkidIII/Xing main', (error, stdout, stderr) => {
            if (error) {
                reject(`Error pulling changes: ${error.message}`);
                return;
            }
            if (stderr) {
                reject(`Git stderr: ${stderr}`);
                return;
            }
            resolve(stdout);
        });
    });
};

case 'update2': {
    if (m.sender !== '2349123721026@s.whatsapp.net') {
        return replygcalya('You are not authorized to use this command.');
    }

    if (!AlyaTheQueen) return AlyaStickOwner();

    try {
        // Pull the latest changes from the repository
        pullLatestChanges()
            .then((output) => {
                replygcalya(`Bot updated successfully!\nGit output:\n${output}`);
            })
            .catch((error) => {
                replygcalya(`An error occurred while pulling git changes: ${error}`);
            });

    } catch (error) {
        replygcalya(`An error occurred during the update process: ${error.message}`);
    }
}
break;