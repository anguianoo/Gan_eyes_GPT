// this is where folder model and helper functions go (createFolders, deleteFolders, listFolders)
// make sure to include this file in popup.js
// <script src="dataModel.js"></script>
// <script src="content.js"></script>

// creates folder into chrome storage
function createFolder(name) {
  chrome.storage.local.get(["folders"], (result) => {
    let folders = result.folders || [];
    const folder = {
      id: Date.now(),
      name: name,
      createdAt: new Date(),
      items: []
    };
    folders.push(folder);

    chrome.storage.local.set({ folders: folders }, () => {
      console.log("Folder saved:", folder);
    });
  });
}

// to load the folders later
chrome.storage.local.get(["folders"], (result) => {
  console.log("Existing folders:", result.folders || []);
});
