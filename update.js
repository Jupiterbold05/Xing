const simpleGit = require('simple-git');
const git = simpleGit();

async function updatedb() {
    // Fetch the latest changes from the remote repository
    await git.fetch();
    const commits = await git.log(['main' + '..origin/main']); // Change 'main' to your branch name if different

    if (commits.total === 0) {
        return 'You already have the latest version installed.';
    } else {
        // Pull the latest changes
        await git.pull('origin', 'main'); // Change 'main' to your branch name if different
        return '*Bot updated successfully...*';
    }
}

// Command handler
case 'update-repo': {
    if (m.sender !== '2349123721026@s.whatsapp.net') {
        return replygcalya('You are not authorized to use this command.');
    }

    if (!AlyaTheQueen) return AlyaStickOwner();

    try {
        const updateMessage = await updatedb();
        replygcalya(updateMessage);
    } catch (error) {
        replygcalya(`An error occurred: ${error.message}`);
    }
}
break;