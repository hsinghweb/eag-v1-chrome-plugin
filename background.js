// Create context menu item when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'explainWord',
    title: 'Explain "%s"',
    contexts: ['selection']
  });
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === 'explainWord') {
    const selectedText = info.selectionText;
    
    try {
      // Show loading state in popup
      await chrome.storage.local.set({ 
        loading: true,
        lastWord: selectedText,
        explanation: ''
      });

      // Call Hugging Face API
      const response = await fetch('https://api-inference.huggingface.co/models/google/flan-t5-base', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          inputs: `What is the ${selectedText}? Explain in 5 lines.`
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const explanation = data[0]?.generated_text || 'No explanation available';

      // Save result
      await chrome.storage.local.set({
        loading: false,
        lastWord: selectedText,
        explanation: explanation
      });

    } catch (error) {
      console.error('Error:', error);
      await chrome.storage.local.set({
        loading: false,
        lastWord: selectedText,
        explanation: 'Error getting explanation. Please try again.'
      });
    }
  }
});