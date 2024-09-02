import React from 'react';

const CommonShortcuts = [
  { key: 'Ctrl + T', action: 'Open a new tab' },
  { key: 'Ctrl + W', action: 'Close the current tab' },
  { key: 'Ctrl + L', action: 'Focus on the address bar' },
  { key: 'Ctrl + D', action: 'Pin current tab' },
  { key: 'Ctrl + Shift + T', action: 'Reopen the last closed tab' },
  { key: 'Ctrl + Shift + N', action: 'Open new incognito window' },
  { key: 'Ctrl + Shift + K', action: 'Clear today tabs' },
  { key: 'Ctrl + Shift + +', action: 'Split view' }
];

const NavigationShortcuts = [
  { key: 'Ctrl + Tab', action: 'Switch to the next tab' },
  { key: 'Ctrl + N', action: 'Open a new window' },
  { key: 'Alt + 1-8', action: 'Switch profile' },
  { key: 'Ctrl + S', action: 'Close toggle sidebar' }
];

const OtherShortcuts = [
  { key: 'Ctrl + F', action: 'Find or ask Ai' },
  { key: 'Ctrl + .', action: 'Open settings' },
  { key: 'Ctrl + P', action: 'Print the current page' },
  { key: 'Alt + F4', action: 'Close the browser' }
];

const ShortcutCategory = ({ title, shortcuts }) => (
  <div className="mb-8">
    <h2 className="text-center text-xl font-semibold mb-4">{title}</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {shortcuts.map((shortcut, index) => (
        <div key={index} className="w-40 p-4 bg-white shadow rounded-md text-center">
          <div className="border rounded py-2 px-4 mb-2 font-mono text-lg">{shortcut.key}</div>
          <div className="text-sm">{shortcut.action}</div>
        </div>
      ))}
    </div>
  </div>
);

const ShortcutList = () => {
  return (
    <div className="p-4">
      <ShortcutCategory title="Common Shortcuts" shortcuts={CommonShortcuts} />
      <ShortcutCategory title="Navigation Shortcuts" shortcuts={NavigationShortcuts} />
      <ShortcutCategory title="Other Shortcuts" shortcuts={OtherShortcuts} />
    </div>
  );
};

export default ShortcutList;
