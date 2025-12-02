interface BlogStep {
  stepNumber: number;
  title: string;
  content: string;
  tips?: string[];
  screenshots?: string[];
  notes?: string[];
  substeps?: string[];
}

interface BlogPostDetails {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  totalSteps: number;
  date: string;
  overview: string;
  proTip?: string;
  conclusion: string;
  steps: BlogStep[];
}

export const blogPostsData: Record<string, BlogPostDetails> = {
  'printer-troubleshooting': {
    id: 'printer-troubleshooting',
    title: 'Printer Troubleshooting',
    subtitle: 'A comprehensive step-by-step guide for resolving common printer issues on Windows and Mac systems',
    category: 'IT Support Guide',
    readTime: '8 min read',
    totalSteps: 6,
    date: 'December 2024',
    overview:
      'Printers can stop working for many reasons. The problem might be with your computer, the printer itself, or the connection between them. This guide walks you through the most effective fixes to get your printer working again.',
    proTip: 'Work through these steps in order. Each one builds on the previous, starting with the quickest fixes.',
    conclusion: 'If none of these steps work, here are a few more things to try:',
    steps: [
      {
        stepNumber: 1,
        title: 'Check the Basics First',
        content:
          "Before diving into software fixes, let's rule out the simple stuff. Many printer problems come from loose cables, empty ink, or low paper.",
        substeps: [
          "Paper: Make sure there's enough paper in the tray and it's loaded correctly.",
          'Ink or toner: Check if the ink levels are low or empty.',
          'Cables: For wired printers, make sure the USB cable is firmly connected at both ends.',
          'Wi-Fi: For wireless printers, confirm the printer and computer are on the same network.',
        ],
        tips: [
          'Low-quality paper can cause "ghost paper jams" that stop your printer from working even when there\'s no visible jam.',
        ],
        screenshots: ['/src/assets/blog/printer-troubleshooting/image.png'],
      },
      {
        stepNumber: 2,
        title: 'Run the Windows Printer Troubleshooter',
        content:
          "Windows has a built-in tool that can find and fix many printer problems automatically. It's a great first step before trying more complex solutions.",
        substeps: [
          'Open Settings → Bluetooth & devices → Printers & scanners',
          'Click on your printer from the list.',
          'Click "Run the troubleshooter" and wait for it to scan and fix any issues.',
        ],
        notes: [
          'If your printer shows as "Offline," you\'ll need to fix the connection issue first before continuing.',
        ],
        screenshots: [
          '/src/assets/blog/printer-troubleshooting/image 1.png',
          '/src/assets/blog/printer-troubleshooting/image 2.png',
          '/src/assets/blog/printer-troubleshooting/image 3.png',
          '/src/assets/blog/printer-troubleshooting/image 4.png',
          '/src/assets/blog/printer-troubleshooting/image 5.png',
          '/src/assets/blog/printer-troubleshooting/image 6.png',
        ],
      },
      {
        stepNumber: 3,
        title: 'Set Your Printer as the Default',
        content:
          "Sometimes your computer sends print jobs to the wrong printer. Windows can automatically change the default printer based on your location, which isn't always helpful. Let's make sure the right printer is selected.",
        substeps: [
          'Go to Settings → Bluetooth & devices → Printers & scanners',
          'Click on the printer you want to use',
          'Click the "Set as default" button',
        ],
        screenshots: [
          '/src/assets/blog/printer-troubleshooting/image 7.png',
          '/src/assets/blog/printer-troubleshooting/image 8.png',
        ],
      },
      {
        stepNumber: 4,
        title: 'Clear the Print Queue',
        content:
          'When you print something, your computer creates a "print job" and puts it in a queue. Sometimes these jobs get stuck and block everything behind them. Clearing the queue often fixes this.',
        substeps: [
          'Go to Settings → Bluetooth & devices → Printers & scanners and select your printer',
          'Click "Open print queue"',
          'In the menu bar, click Printer → Cancel All Documents',
          'Click Yes to confirm',
        ],
        screenshots: [
          '/src/assets/blog/printer-troubleshooting/image 9.png',
          '/src/assets/blog/printer-troubleshooting/image 10.png',
          '/src/assets/blog/printer-troubleshooting/image 11.png',
          '/src/assets/blog/printer-troubleshooting/image 12.png',
          '/src/assets/blog/printer-troubleshooting/image 13.png',
          '/src/assets/blog/printer-troubleshooting/image 14.png',
          '/src/assets/blog/printer-troubleshooting/image 15.png',
        ],
      },
      {
        stepNumber: 5,
        title: 'Update or Reinstall Printer Drivers',
        content:
          "Drivers are software that help your computer talk to your printer. If they're outdated or corrupted, your printer won't work properly. Here's how to update them.",
        substeps: [
          'Right click the Start Menu (or press Windows + X) and select Device Manager',
          'Expand the Printers section',
          'Right-click your printer and select Update driver',
          'Choose "Search automatically for drivers"',
        ],
        tips: [
          'You can also download the latest driver directly from your printer manufacturer\'s website (HP, Canon, Brother, Epson, etc.) for the most up-to-date version.',
        ],
        screenshots: [
          '/src/assets/blog/printer-troubleshooting/image 16.png',
          '/src/assets/blog/printer-troubleshooting/image 17.png',
        ],
      },
      {
        stepNumber: 6,
        title: 'Restart the Print Spooler Service',
        content:
          'The Print Spooler is a Windows service that manages all print jobs. If it glitches, your printer stops responding. Restarting it often fixes the problem.',
        substeps: [
          'Press Windows + R to open the Run dialog',
          'Type "services.msc" and press Enter',
          'Scroll down and find "Print Spooler"',
          'Right-click it and select "Restart"',
        ],
        tips: [
          'If the service keeps stopping, there might be a deeper issue with your Windows installation. Consider running a system file check by opening Command Prompt as administrator and typing: sfc /scannow',
        ],
      },
    ],
  },
  'network-troubleshooting': {
    id: 'network-troubleshooting',
    title: 'Network Connection Troubleshooting',
    subtitle: 'Step-by-step solutions to fix internet connectivity issues',
    category: 'Network Support Guide',
    readTime: '10 min read',
    totalSteps: 8,
    date: 'December 2024',
    overview:
      "Is your internet not working? Don't worry! This guide will walk you through 8 simple troubleshooting steps to get your network connection back online.",
    proTip: 'First, find out if the problem is with one device or your entire network by testing other devices.',
    conclusion:
      'If none of these steps work, contact your Internet Service Provider (ISP). The problem might be on their end, or you may need professional help.',
    steps: [
      {
        stepNumber: 1,
        title: 'Check If Other Devices Can Connect',
        content: 'First, find out if the problem is with one device or your entire network.',
        substeps: [
          'Try connecting another device (phone, tablet, or laptop) to your Wi-Fi',
          'If other devices work fine, the problem is with your original device',
          'If nothing connects, the issue is with your router or internet service',
        ],
        tips: ['Test both Wi-Fi and mobile data on your phone to confirm if the internet itself is working.'],
        screenshots: ['/src/assets/blog/network-troubleshooting/wifi-phone.png'],
      },
      {
        stepNumber: 2,
        title: 'Reboot Your Router and Modem',
        content: 'Restarting your network equipment fixes most connection problems.',
        substeps: [
          'Unplug the power cable from your router and modem',
          'Wait for 30 seconds',
          'Plug the modem back in first and wait for it to fully start',
          'Then plug in the router and wait 1-2 minutes',
          'Try connecting to the internet again',
        ],
        tips: [
          'Rebooting clears temporary errors and refreshes the connection between your devices and the internet.',
        ],
        screenshots: ['/src/assets/blog/network-troubleshooting/router.png'],
      },
      {
        stepNumber: 3,
        title: 'Check Your Wi-Fi Settings',
        content: "Make sure you're connected to the right network with the correct password.",
        substeps: [
          'Open your Wi-Fi settings on your device',
          "Check if you're connected to your home network",
          'If you see "Connected, no internet", disconnect and reconnect',
          'Make sure you entered the correct Wi-Fi password',
        ],
        screenshots: ['/src/assets/blog/network-troubleshooting/wifi-settings.png'],
      },
      {
        stepNumber: 4,
        title: 'Check Network Adapter Properties',
        content: 'On Windows, verify your network adapter is working correctly.',
        substeps: [
          'Right-click the network icon in your taskbar',
          'Select "Open Network & Internet settings"',
          'Click "Change adapter options"',
          'Right-click your Wi-Fi or Ethernet connection',
          'Select "Properties" to check settings',
        ],
        notes: ['Make sure "Internet Protocol Version 4 (TCP/IPv4)" is checked.'],
        screenshots: ['/src/assets/blog/network-troubleshooting/properties.png'],
      },
      {
        stepNumber: 5,
        title: 'Reset Your IP Settings',
        content: 'Setting your device to get an IP address automatically often fixes connection issues.',
        substeps: [
          'Open Network Properties (see Step 4)',
          'Double-click "Internet Protocol Version 4 (TCP/IPv4)"',
          'Select "Obtain an IP address automatically"',
          'Select "Obtain DNS server address automatically"',
          'Click OK and restart your computer',
        ],
        screenshots: ['/src/assets/blog/network-troubleshooting/edit-ip-settings.png'],
      },
      {
        stepNumber: 6,
        title: 'Run Windows Network Troubleshooter',
        content: 'Windows has a built-in tool that automatically finds and fixes common problems.',
        substeps: [
          'Click the Start menu and type "troubleshoot"',
          'Select "Troubleshoot settings"',
          'Click "Network and Internet"',
          'Click "Run the troubleshooter"',
          'Follow the on-screen instructions',
        ],
        tips: ['The troubleshooter will tell you what it found and if it fixed the problem.'],
        screenshots: ['/src/assets/blog/network-troubleshooting/network-troubleshooter.png'],
      },
      {
        stepNumber: 7,
        title: 'Update Network Drivers',
        content:
          'Outdated drivers can cause connection problems like Wi-Fi dropouts and speed issues. Keeping your network adapter drivers up to date is essential for optimal performance.',
        substeps: [
          'Use the Windows key + X keyboard shortcut to open the Power User menu',
          'Select "Device Manager"',
          'Expand "Network adapters"',
          'Select the name of your adapter, right-click it',
          'Select "Update Driver Software"',
          'Click the "Search automatically for updated driver software" option',
        ],
        notes: [
          'If Windows Update doesn\'t have any new drivers available, check your computer manufacturer\'s support website (Intel, HP, Lenovo, Dell, etc.) to download the latest driver.',
        ],
        tips: [
          'If you can\'t connect to the internet, download the driver from another computer with an internet connection, save it on an external drive, and manually install it on your computer.',
        ],
        screenshots: [
          '/src/assets/blog/network-troubleshooting/windows-network.png',
          '/src/assets/blog/network-troubleshooting/1.jpg',
          '/src/assets/blog/network-troubleshooting/2.jpg',
        ],
      },
      {
        stepNumber: 8,
        title: 'Install Windows Updates',
        content: 'Windows updates often include network fixes and improvements.',
        substeps: [
          'Click the Start menu and select "Settings"',
          'Click "Update & Security"',
          'Click "Windows Update"',
          'Click "Check for updates"',
          'Install any available updates and restart your computer',
        ],
        tips: ['Always restart your computer after installing updates to apply all changes.'],
        screenshots: ['/src/assets/blog/network-troubleshooting/windows-update-1.png'],
      },
    ],
  },
  'active-directory-password': {
    id: 'active-directory-password',
    title: 'Active Directory Password Expiration Notifications',
    subtitle: 'Configure Windows to automatically notify users before their passwords expire',
    category: 'System Administration Guide',
    readTime: '6 min read',
    totalSteps: 5,
    date: 'December 2024',
    overview:
      'Learn how to configure Active Directory and Group Policy to notify users of upcoming password expiration. This helps prevent locked accounts and reduces help desk tickets.',
    proTip:
      'Set notification prompts to begin 14 days before expiration for optimal user experience and minimal disruption.',
    conclusion:
      'After implementing these settings, users will receive timely reminders to change their passwords before they expire. This proactive approach reduces account lockouts and improves security compliance.',
    steps: [
      {
        stepNumber: 1,
        title: 'Open Local Group Policy Editor',
        content:
          'The Local Group Policy Editor (gpedit.msc) allows you to configure password notification settings for your domain or local computer.',
        substeps: [
          'Press Windows key + R to open the Run dialog',
          'Type "gpedit.msc" and press Enter',
          'If prompted by User Account Control, click "Yes" to allow',
        ],
        notes: [
          'This feature is available on Windows Pro, Enterprise, and Education editions. Home editions do not include Group Policy Editor.',
        ],
        screenshots: ['/src/assets/blog/active-directory-password/gpedit.png'],
      },
      {
        stepNumber: 2,
        title: 'Navigate to Security Options',
        content:
          'The Security Options section contains settings for password policies and expiration notifications.',
        substeps: [
          'In the left pane, expand "Computer Configuration"',
          'Expand "Windows Settings"',
          'Expand "Security Settings"',
          'Expand "Local Policies"',
          'Click on "Security Options"',
        ],
        screenshots: ['/src/assets/blog/active-directory-password/security-options-group-policy.png'],
      },
      {
        stepNumber: 3,
        title: 'Configure Password Expiration Prompt',
        content:
          'This setting controls how many days before expiration users will be prompted to change their password.',
        substeps: [
          'In the right pane, scroll down and locate "Interactive logon: Prompt user to change password before expiration"',
          'Double-click the policy to open it',
          'Check the "Define this policy setting" box',
          'Enter the number of days (recommended: 14 days)',
          'Click "Apply" then "OK"',
        ],
        tips: [
          'Setting this to 14 days gives users plenty of time to change passwords without causing panic or creating help desk tickets.',
        ],
        screenshots: ['/src/assets/blog/active-directory-password/prompt-user-to-change-password-before-expiration.png'],
      },
      {
        stepNumber: 4,
        title: 'Set Notification Frequency',
        content:
          'Configure how often the password expiration notification appears after the initial warning.',
        substeps: [
          'Find the related policy setting in the same Security Options list',
          'Configure notification frequency (daily reminders recommended)',
          'Click "Apply" and "OK" to save changes',
        ],
        notes: [
          'Daily notifications ensure users don\'t forget to change their passwords, but not so frequent that they become annoying.',
        ],
        screenshots: ['/src/assets/blog/active-directory-password/notification-frequency.png'],
      },
      {
        stepNumber: 5,
        title: 'Apply and Test the Policy',
        content:
          'After configuring the policy, you need to apply it and verify it works correctly.',
        substeps: [
          'Close the Group Policy Editor',
          'Open Command Prompt as Administrator',
          'Type "gpupdate /force" to immediately apply the policy',
          'Press Enter and wait for the update to complete',
          'Test by logging in with an account that has an expiring password',
        ],
        tips: [
          'For domain controllers, use "gpupdate /force" on client machines or wait for the automatic Group Policy refresh (every 90 minutes by default).',
        ],
        screenshots: ['/src/assets/blog/active-directory-password/password-expiration-notification.png'],
      },
    ],
  },
};
