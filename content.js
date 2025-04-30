const injectSidebarUI = () => {
    const sidebar = document.querySelector("nav");

    if (!sidebar) return;

    // Look for a child node that includes "Today" (or any label section)
    const firstChatSection = Array.from(sidebar.querySelectorAll("div"))
        .find(div => div.textContent.trim().toLowerCase().includes("today"));

    if (!firstChatSection) return;

    // Prevent multiple injections
    if (document.getElementById("chat-organizer-toolbar")) return;

    // Create a container for folders + button
    const organizerDiv = document.createElement("div");
    organizerDiv.id = "chat-organizer-toolbar";
    organizerDiv.style.padding = "10px";
    organizerDiv.style.borderBottom = "1px solid #ccc";

    // Example button
    const folderBtn = document.createElement("button");
    folderBtn.textContent = "📁 Manage Folders";
    folderBtn.style.background = "#eee";
    folderBtn.style.border = "none";
    folderBtn.style.borderRadius = "6px";
    folderBtn.style.padding = "8px";
    folderBtn.style.cursor = "pointer";

    folderBtn.addEventListener("click", () => {
        console.log("Folder button clicked!");
        // Add modal or folder logic here
    });

    organizerDiv.appendChild(folderBtn);

    // Insert before "Today"
    sidebar.insertBefore(organizerDiv, firstChatSection);
};

// Wait for sidebar to load (DOM is dynamic)
const sidebarObserver = new MutationObserver(() => {
    injectSidebarUI();
});

sidebarObserver.observe(document.body, { childList: true, subtree: true });

// Optional: Try once after a short delay in case observer misses it
setTimeout(() => injectSidebarUI(), 1000);
