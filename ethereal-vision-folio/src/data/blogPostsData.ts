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
        screenshots: ['/blog/printer-troubleshooting/image.png'],
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
          '/blog/printer-troubleshooting/image 1.png',
          '/blog/printer-troubleshooting/image 2.png',
          '/blog/printer-troubleshooting/image 3.png',
          '/blog/printer-troubleshooting/image 4.png',
          '/blog/printer-troubleshooting/image 5.png',
          '/blog/printer-troubleshooting/image 6.png',
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
          '/blog/printer-troubleshooting/image 7.png',
          '/blog/printer-troubleshooting/image 8.png',
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
          '/blog/printer-troubleshooting/image 9.png',
          '/blog/printer-troubleshooting/image 10.png',
          '/blog/printer-troubleshooting/image 11.png',
          '/blog/printer-troubleshooting/image 12.png',
          '/blog/printer-troubleshooting/image 13.png',
          '/blog/printer-troubleshooting/image 14.png',
          '/blog/printer-troubleshooting/image 15.png',
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
          '/blog/printer-troubleshooting/image 16.png',
          '/blog/printer-troubleshooting/image 17.png',
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
        screenshots: ['/blog/network-troubleshooting/wifi-phone.png'],
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
        screenshots: ['/blog/network-troubleshooting/router.png'],
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
        screenshots: ['/blog/network-troubleshooting/wifi-settings.png'],
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
        screenshots: ['/blog/network-troubleshooting/properties.png'],
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
        screenshots: ['/blog/network-troubleshooting/edit-ip-settings.png'],
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
        screenshots: ['/blog/network-troubleshooting/network-troubleshooter.png'],
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
          '/blog/network-troubleshooting/windows-network.png',
          '/blog/network-troubleshooting/1.jpg',
          '/blog/network-troubleshooting/2.jpg',
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
        screenshots: ['/blog/network-troubleshooting/windows-update-1.png'],
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
        screenshots: ['/blog/active-directory-password/gpedit.png'],
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
        screenshots: ['/blog/active-directory-password/security-options-group-policy.png'],
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
        screenshots: ['/blog/active-directory-password/prompt-user-to-change-password-before-expiration.png'],
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
        screenshots: ['/blog/active-directory-password/notification-frequency.png'],
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
        screenshots: ['/blog/active-directory-password/password-expiration-notification.png'],
      },
    ],
  },
  'group-policy-fundamentals': {
    id: 'group-policy-fundamentals',
    title: 'Group Policy Fundamentals',
    subtitle: 'Master the basics of Group Policy and understand how policies are processed in Active Directory',
    category: 'System Administration Guide',
    readTime: '12 min read',
    totalSteps: 5,
    date: 'December 2024',
    overview:
      'Learn the fundamentals of Group Policy including what it is, key benefits, core definitions, and how policies are processed and applied in an Active Directory environment.',
    proTip:
      'Understanding the LSDOU (Local, Site, Domain, OU) processing order is critical for effective Group Policy management and troubleshooting.',
    conclusion:
      'With a solid understanding of Group Policy fundamentals and processing order, you can effectively design and implement policies that meet your organization\'s security and configuration requirements.',
    steps: [
      {
        stepNumber: 1,
        title: 'What is Group Policy?',
        content:
          'Group Policy is a feature in Microsoft Windows that allows administrators to centrally manage and configure operating system settings, application settings, and user settings across an Active Directory domain.',
        substeps: [
          'Provides centralized management of computers and users',
          'Enforces security policies and compliance requirements',
          'Automates configuration tasks across the network',
          'Reduces administrative overhead and ensures consistency',
        ],
        screenshots: ['/blog/group-policy/group-policy-management.webp'],
      },
      {
        stepNumber: 2,
        title: 'Group Policy Benefits',
        content:
          'Group Policy provides numerous benefits for enterprise IT management, from enhanced security to improved efficiency and compliance.',
        substeps: [
          'Centralized Management: Control settings for thousands of computers from one location',
          'Security Enforcement: Apply security policies consistently across the organization',
          'User Experience: Standardize desktop environments and application settings',
          'Compliance: Meet regulatory requirements with documented policy controls',
          'Automation: Reduce manual configuration tasks and human error',
        ],
        screenshots: ['/blog/group-policy/gpo-benefits.webp'],
      },
      {
        stepNumber: 3,
        title: 'Group Policy Definitions and Components',
        content:
          'Understanding key Group Policy terminology is essential for effective administration.',
        substeps: [
          'GPO (Group Policy Object): A collection of policy settings stored in Active Directory',
          'Computer Configuration: Settings that apply to computers regardless of who logs on',
          'User Configuration: Settings that apply to users regardless of which computer they use',
          'GPMC (Group Policy Management Console): The primary tool for managing GPOs',
        ],
        screenshots: [
          '/blog/group-policy/gpo-computer-configuration.webp',
          '/blog/group-policy/gpo-user-configuration.webp',
        ],
      },
      {
        stepNumber: 4,
        title: 'GPO Processing Order (LSDOU)',
        content:
          'Group Policy Objects are processed in a specific order: Local, Site, Domain, and Organizational Unit (LSDOU). Later policies override earlier ones.',
        substeps: [
          'Local: Policies stored on the local computer are applied first',
          'Site: Policies linked to the Active Directory site are applied second',
          'Domain: Domain-level policies are applied third',
          'Organizational Unit: OU policies are applied last and have the highest precedence',
        ],
        notes: [
          'By default, if there is a conflict, the last policy applied (closest to the user/computer) wins.',
        ],
        tips: [
          'Use the "Enforced" option to prevent a GPO from being overridden by policies at lower levels in the hierarchy.',
        ],
        screenshots: ['/blog/group-policy/group-policy-order-of-precedence.webp'],
      },
      {
        stepNumber: 5,
        title: 'Understanding Group Policy Precedence',
        content:
          'When multiple GPOs apply to the same object, understanding precedence is critical for predicting the final configuration.',
        substeps: [
          'Multiple GPOs at the same level are processed in link order (1, 2, 3...)',
          'Link Order 1 has the highest precedence at that level',
          'The "Enforced" setting prevents child OUs from overriding',
          'The "Block Inheritance" setting prevents parent policies from applying',
        ],
        tips: [
          'Use "Enforced" sparingly - it can make troubleshooting difficult. Document all enforced policies.',
        ],
        screenshots: ['/blog/group-policy/gpo-order-example.webp'],
      },
    ],
  },
  'group-policy-management': {
    id: 'group-policy-management',
    title: 'Creating and Managing Group Policies',
    subtitle: 'Learn to use the Group Policy Management Console and create your first GPOs',
    category: 'System Administration Guide',
    readTime: '15 min read',
    totalSteps: 4,
    date: 'December 2024',
    overview:
      'Master the Group Policy Management Console (GPMC) and learn to create, link, and manage Group Policy Objects with practical examples including security policies and logon messages.',
    proTip:
      'Always test new GPOs in a test OU with a few pilot users before rolling them out organization-wide.',
    conclusion:
      'By mastering the GPMC and understanding how to create effective GPOs, you can efficiently manage and secure your Active Directory environment.',
    steps: [
      {
        stepNumber: 1,
        title: 'Group Policy Management Console Overview',
        content:
          'The Group Policy Management Console (GPMC) is the primary tool for managing Group Policy in an Active Directory environment.',
        substeps: [
          'Open GPMC by typing "gpmc.msc" in the Run dialog (Win + R)',
          'Navigate through Forest → Domains → Your Domain',
          'View existing GPOs in the "Group Policy Objects" container',
          'Create, edit, link, and manage GPOs from this central interface',
        ],
        screenshots: [
          '/blog/group-policy/gpo-management-console.webp',
          '/blog/group-policy/gpmc-overview.webp',
        ],
      },
      {
        stepNumber: 2,
        title: 'Understanding GPO Structure and Details',
        content:
          'Each GPO contains detailed information about its settings, links, security filtering, and delegation.',
        substeps: [
          'Scope Tab: Shows where the GPO is linked and security filtering',
          'Details Tab: Displays GPO status, creation date, and version information',
          'Settings Tab: Shows all configured policy settings',
          'Delegation Tab: Controls who can edit and manage the GPO',
        ],
        screenshots: ['/blog/group-policy/gpo-details.webp'],
      },
      {
        stepNumber: 3,
        title: 'Example 1: Block Access to Control Panel',
        content:
          'Create a GPO that prevents users from accessing the Control Panel, a common security requirement.',
        substeps: [
          'In GPMC, right-click "Group Policy Objects" and select "New"',
          'Name the GPO (e.g., "Block Control Panel Access")',
          'Right-click the new GPO and select "Edit"',
          'Navigate to: User Configuration → Policies → Administrative Templates → Control Panel',
          'Enable the setting "Prohibit access to Control Panel and PC settings"',
          'Link the GPO to the target OU (e.g., "All Users")',
        ],
        tips: [
          'Remember to test this policy with a test user first. Some users may need Control Panel access for legitimate work tasks.',
        ],
        screenshots: [
          '/blog/group-policy/create-new-user-gpo.webp',
          '/blog/group-policy/gpo-user-policy-admin-control-panel.webp',
          '/blog/group-policy/enabl-gpo-control-panel-setting.webp',
          '/blog/group-policy/control-panel-blocked-message.webp',
        ],
      },
      {
        stepNumber: 4,
        title: 'Example 2: Create a Legal Notice Logon Banner',
        content:
          'Configure an interactive logon message that displays legal notices to users when they log on to domain computers.',
        substeps: [
          'Create a new GPO or edit an existing one',
          'Navigate to: Computer Configuration → Policies → Windows Settings → Security Settings → Local Policies → Security Options',
          'Find "Interactive logon: Message title for users attempting to log on"',
          'Enter a title (e.g., "Legal Notice" or "Company Policy")',
          'Find "Interactive logon: Message text for users attempting to log on"',
          'Enter your legal disclaimer or acceptable use policy text',
          'Link the GPO to your domain or specific OUs',
        ],
        notes: [
          'The logon message appears before users can access their desktop. Users must click OK to continue.',
        ],
        tips: [
          'Work with your legal department to ensure the message text meets compliance requirements.',
        ],
        screenshots: [
          '/blog/group-policy/gpo-interactive-logon-message.webp',
          '/blog/group-policy/gpo-logon-message-title.webp',
          '/blog/group-policy/gpo-enter-logon-message-2.webp',
        ],
      },
    ],
  },
  'group-policy-advanced': {
    id: 'group-policy-advanced',
    title: 'Advanced Group Policy Configuration',
    subtitle: 'Master Group Policy Preferences, Item-Level Targeting, and Security Filtering',
    category: 'System Administration Guide',
    readTime: '18 min read',
    totalSteps: 5,
    date: 'December 2024',
    overview:
      'Take your Group Policy skills to the next level with Preferences, Item-Level Targeting, and Security Filtering to create highly targeted and flexible policies.',
    proTip:
      'Group Policy Preferences provide more flexibility than traditional policies and support item-level targeting for granular control.',
    conclusion:
      'Advanced GP techniques like Preferences and Security Filtering enable you to create sophisticated, targeted policies that meet complex business requirements.',
    steps: [
      {
        stepNumber: 1,
        title: 'Introduction to Group Policy Preferences',
        content:
          'Group Policy Preferences extend the capabilities of Group Policy by allowing you to configure settings that users can change, unlike traditional policies which enforce settings.',
        substeps: [
          'Preferences are found under User/Computer Configuration → Preferences',
          'Settings include Drive Maps, Registry, Shortcuts, Files, Folders, and more',
          'Unlike Policies, Preferences don\'t prevent users from changing settings',
          'Preferences support multiple actions: Create, Replace, Update, Delete',
        ],
        notes: [
          'Preferences are applied once by default. If a user changes the setting, it stays changed unless the preference is set to "Replace" mode.',
        ],
      },
      {
        stepNumber: 2,
        title: 'Understanding Item-Level Targeting',
        content:
          'Item-Level Targeting allows you to apply preference items based on specific criteria like computer name, IP range, security group membership, operating system, and more.',
        substeps: [
          'Right-click any preference item and select "Properties"',
          'Go to the "Common" tab',
          'Check "Item-level targeting" and click "Targeting..."',
          'Add targeting criteria (e.g., Security Group, OS Version, IP Address Range)',
        ],
        tips: [
          'Use Item-Level Targeting to create a single GPO that applies different settings based on conditions, reducing the number of GPOs needed.',
        ],
      },
      {
        stepNumber: 3,
        title: 'Create a GPO Using Preferences and Targeting',
        content:
          'Practical example: Create a mapped network drive that only appears for members of the IT Security group.',
        substeps: [
          'Create a new GPO and edit it',
          'Navigate to: User Configuration → Preferences → Windows Settings → Drive Maps',
          'Right-click and select New → Mapped Drive',
          'Enter the network path (e.g., \\\\server\\ITSecurity)',
          'Assign a drive letter (e.g., Z:)',
          'Go to the Common tab, enable Item-level targeting',
          'Add a "Security Group" targeting item and specify "IT Security"',
        ],
        screenshots: [
          '/blog/group-policy/create-gpo-preference-1.webp',
          '/blog/group-policy/create-gpo-preference-2.webp',
          '/blog/group-policy/create-gpo-preference-3.webp',
          '/blog/group-policy/create-gpo-preference-4.webp',
          '/blog/group-policy/create-gpo-preference-5.webp',
          '/blog/group-policy/create-gpo-preference-6.webp',
        ],
      },
      {
        stepNumber: 4,
        title: 'Security Filtering: Exclude Users from a GPO',
        content:
          'Security Filtering allows you to control which users and computers a GPO applies to, even if they\'re in the linked OU.',
        substeps: [
          'Open GPMC and select your GPO',
          'Go to the "Scope" tab and find the "Security Filtering" section',
          'By default, "Authenticated Users" is listed (GPO applies to everyone)',
          'To exclude a user: Click "Add" and add the user/group you want to exclude',
          'Select the excluded user/group, click "Advanced"',
          'In the Security tab, find the user/group and set "Apply group policy" to "Deny"',
        ],
        notes: [
          'Deny permissions always take precedence over Allow permissions. Use this carefully.',
        ],
        tips: [
          'Instead of using Deny, remove "Authenticated Users" and add specific groups with Allow permissions for cleaner administration.',
        ],
        screenshots: [
          '/blog/group-policy/gpo-filtering-1a.webp',
          '/blog/group-policy/gpo-filtering-2.webp',
          '/blog/group-policy/gpo-filtering-3a.webp',
        ],
      },
      {
        stepNumber: 5,
        title: 'Apply GPO to Specific Users with Security Filtering',
        content:
          'Use Security Filtering to apply a GPO only to specific users or computers, creating highly targeted policies.',
        substeps: [
          'Select your GPO in GPMC and go to the Scope tab',
          'In Security Filtering, remove "Authenticated Users"',
          'Click "Add" and select the specific user, computer, or security group',
          'The GPO will now only apply to the added principals',
          'Ensure the selected principals have "Read" and "Apply group policy" permissions',
        ],
        tips: [
          'Create security groups for GPO targeting (e.g., "Sales_Desktop_Settings") rather than adding individual users for easier management.',
        ],
        screenshots: [
          '/blog/group-policy/gpo-filtering-4.webp',
          '/blog/group-policy/gpo-filtering-5.webp',
          '/blog/group-policy/gpo-filtering-6.webp',
          '/blog/group-policy/gpo-filter-example-1.webp',
        ],
      },
    ],
  },
  'group-policy-troubleshooting': {
    id: 'group-policy-troubleshooting',
    title: 'Group Policy Troubleshooting',
    subtitle: 'Diagnose and resolve common Group Policy issues in Active Directory',
    category: 'System Administration Guide',
    readTime: '10 min read',
    totalSteps: 4,
    date: 'December 2024',
    overview:
      'Learn essential troubleshooting techniques to diagnose and fix Group Policy problems, including replication issues, processing failures, and unexpected policy application.',
    proTip:
      'Always start with "gpupdate /force" and "gpresult /r" when troubleshooting Group Policy issues. These two commands solve 80% of GP problems.',
    conclusion:
      'Effective Group Policy troubleshooting requires a systematic approach using the right tools. Master these techniques to quickly resolve policy issues.',
    steps: [
      {
        stepNumber: 1,
        title: 'Essential Group Policy Troubleshooting Commands',
        content:
          'Learn the key command-line tools for diagnosing and resolving Group Policy issues.',
        substeps: [
          'gpupdate /force - Force immediate policy update',
          'gpresult /r - Display Resultant Set of Policy summary',
          'gpresult /h report.html - Generate detailed HTML report',
          'gpresult /scope user /v - Verbose user policy information',
          'gpresult /scope computer /v - Verbose computer policy information',
        ],
        tips: [
          'Run "gpupdate /force" as administrator to ensure both computer and user policies update immediately.',
        ],
        screenshots: ['/blog/group-policy/group-policy-troubleshooting-1.webp'],
      },
      {
        stepNumber: 2,
        title: 'Using Group Policy Results Wizard',
        content:
          'The Group Policy Results Wizard in GPMC provides a graphical way to see which policies applied to a user or computer.',
        substeps: [
          'Open Group Policy Management Console (gpmc.msc)',
          'Right-click "Group Policy Results" and select "Group Policy Results Wizard"',
          'Select the target computer',
          'Select the target user (or select "Do not display user policy settings")',
          'Review the results showing all applied GPOs, settings, and any errors',
        ],
        notes: [
          'The wizard queries the target computer, so the computer must be online and accessible.',
        ],
        screenshots: ['/blog/group-policy/group-policy-troubleshooting-2.webp'],
      },
      {
        stepNumber: 3,
        title: 'Common Group Policy Issues and Solutions',
        content:
          'Identify and resolve the most common Group Policy problems encountered in production environments.',
        substeps: [
          'Issue: Policies not applying - Solution: Run gpupdate /force, check link order and security filtering',
          'Issue: Slow logon times - Solution: Review and optimize the number of GPOs, disable unused settings',
          'Issue: Settings reverting - Solution: Check for conflicting GPOs, verify enforcement and inheritance',
          'Issue: GPO not replicating - Solution: Check Active Directory replication, review SYSVOL replication',
          'Issue: Computer vs User policy conflict - Solution: Understand loopback processing mode',
        ],
        tips: [
          'Enable debug logging for Group Policy by setting the registry key: HKLM\\Software\\Microsoft\\Windows NT\\CurrentVersion\\Diagnostics to 1',
        ],
        screenshots: ['/blog/group-policy/group-policy-troubleshooting-3.webp'],
      },
      {
        stepNumber: 4,
        title: 'Group Policy Troubleshooting Best Practices',
        content:
          'Follow these best practices to prevent issues and make troubleshooting easier.',
        substeps: [
          'Use clear, descriptive names for GPOs that indicate their purpose',
          'Document each GPO with comments in the GPMC',
          'Test all GPOs in a test OU before production deployment',
          'Keep the number of GPOs to a minimum by consolidating related settings',
          'Regularly review and remove unused or obsolete GPOs',
          'Use security groups for filtering rather than individual users',
          'Monitor Group Policy application using Event Viewer logs',
        ],
        notes: [
          'Group Policy events are logged in Event Viewer under Applications and Services Logs → Microsoft → Windows → GroupPolicy → Operational',
        ],
        tips: [
          'Create a Group Policy documentation spreadsheet listing all GPOs, their purpose, link locations, and any special filtering or targeting.',
        ],
      },
    ],
  },
  'ubuntu-hardening': {
    id: 'ubuntu-hardening',
    title: 'Ubuntu System Hardening',
    subtitle: 'Complete security hardening guide for Ubuntu desktops and servers - from installation to production',
    category: 'Linux Security Guide',
    readTime: '20 min read',
    totalSteps: 8,
    date: 'December 2024',
    overview:
      'System hardening is critical for protecting Ubuntu systems from security threats. This comprehensive guide covers essential security measures during and after installation, helping you reduce attack surface and improve security defenses for Ubuntu 20.04, 22.04, and 24.04 LTS.',
    proTip: 'Apply these hardening steps in order, starting during installation for maximum security benefit.',
    conclusion: 'System hardening is an ongoing process. Regularly review and update your security measures to maintain optimal protection.',
    steps: [
      {
        stepNumber: 1,
        title: 'Use Strong Passwords During Installation',
        content:
          'The first user account created during Ubuntu installation is added to the administrative group with sudo privileges. A strong password is essential to protect against brute force attacks.',
        substeps: [
          'During installation, when prompted to create a user account, avoid weak passwords',
          'Use passwords longer than 12 characters for increased security',
          'Include a mix of uppercase, lowercase, numbers, and special characters',
          'Consider adding repetitive special characters (e.g., 10 dollar signs) to increase length easily',
        ],
        tips: [
          'Weak passwords can be cracked in seconds by automated tools performing thousands of guesses per second.',
          'Adding a single character 10 times is simple but powerful for password length.',
        ],
        notes: [
          'Never use weak passwords during development or production - this is a serious security risk.',
        ],
        screenshots: ['/blog/ubuntu-hardening/ubuntu-server-hardening-weak-password.png'],
      },
      {
        stepNumber: 2,
        title: 'Enable Disk Encryption with LVM',
        content:
          'Encrypted LVM volumes protect data at rest. If your system is stolen or a disk is returned for repair, the data cannot be accessed without the encryption passphrase.',
        substeps: [
          'During installation, select the guided partition method',
          'Choose "Use entire disk and set up encrypted LVM"',
          'Enter a strong passphrase when prompted (this will be required during boot)',
          'Confirm the passphrase and continue with installation',
        ],
        tips: [
          'Disk encryption protects against physical theft and unauthorized disk access.',
          'Make your encryption passphrase long - it needs to be secure but memorable since you\'ll enter it at every boot.',
        ],
        notes: [
          'The passphrase is required during boot to unlock the disk, so ensure you can remember it.',
          'Encryption protects data at rest but not data in use or data in transit.',
        ],
        screenshots: [
          '/blog/ubuntu-hardening/ubuntu-server-hardening-use-encrypted-lvm.png',
          '/blog/ubuntu-hardening/ubuntu-server-hardening-use-encrypted-lvm-screen.png',
        ],
      },
      {
        stepNumber: 3,
        title: 'Enable Automatic Security Updates',
        content:
          'Security vulnerabilities are discovered daily. Automatic security updates ensure your system receives critical patches without manual intervention.',
        substeps: [
          'During installation, select "Install security updates automatically"',
          'This enables the unattended-upgrades package',
          'Security updates are applied automatically to patch known vulnerabilities (CVEs)',
        ],
        tips: [
          'Security updates only patch vulnerabilities - they don\'t introduce new features, making them low-risk.',
          'Manual kernel updates still require a reboot to take effect.',
        ],
        notes: [
          'Automatic updates only apply to security repositories by default. Regular updates still need manual planning.',
        ],
        screenshots: [
          '/blog/ubuntu-hardening/ubuntu-server-hardening-apply-automatic-security-updates.png',
        ],
      },
      {
        stepNumber: 4,
        title: 'Choose Minimal Installation',
        content:
          'Only install software packages that are truly needed. Each additional package, service, or user increases your attack surface and the chance of security breaches.',
        substeps: [
          'During installation, select only required software groups',
          'For servers, typically only select the SSH server role',
          'Additional packages can be added later as needed',
          'Avoid installing unnecessary services that may start automatically with weak defaults',
        ],
        tips: [
          'Ubuntu tends to enable and start installed services by default, potentially with weak configurations.',
          'A smaller footprint means fewer potential security vulnerabilities.',
        ],
        notes: [
          'You can always add more packages later - it\'s harder to remove unnecessary ones safely.',
        ],
        screenshots: [
          '/blog/ubuntu-hardening/ubuntu-server-hardening-minimal-software-installation.png',
        ],
      },
      {
        stepNumber: 5,
        title: 'Configure Automatic Updates Post-Installation',
        content:
          'If your system is already installed without automatic updates, you can enable them now. Configure unattended-upgrades to keep your system secure.',
        substeps: [
          'Install the package: sudo apt install unattended-upgrades',
          'Edit configuration at /etc/apt/apt.conf.d/50unattended-upgrades',
          'Review which repositories are enabled for automatic updates',
          'Consider adding external repositories if used',
          'Manually run updates regularly: sudo apt update && sudo apt upgrade',
        ],
        tips: [
          'Regular updates improve system stability, especially on servers.',
          'Plan regular maintenance windows for non-security updates and reboots.',
        ],
        notes: [
          'Kernel updates require system restart to take effect.',
          'External repositories must be manually added to unattended-upgrades configuration.',
        ],
      },
      {
        stepNumber: 6,
        title: 'Configure PAM Password Quality Requirements',
        content:
          'PAM (Pluggable Authentication Module) pwquality enforces strong password policies for all users, preventing weak passwords and requiring regular changes.',
        substeps: [
          'Install PAM pwquality: sudo apt install libpam-pwquality',
          'Edit /etc/pam.d/common-password',
          'Find the line with pam_pwquality.so',
          'Add "minlen=10" before the retry parameter to require 10-character passwords',
          'Add complexity rules: dcredit, ucredit, lcredit, ocredit (see man pam_pwquality)',
          'Configure password aging in /etc/login.defs (PASS_MAX_DAYS)',
        ],
        tips: [
          'Test password policy changes with a test user account first.',
          'For sensitive systems, require password changes every 30 days.',
        ],
        notes: [
          'Always maintain a root console session when testing PAM changes to avoid lockout.',
          'Default PASS_MAX_DAYS is 99999 days - tune this down for production systems.',
        ],
      },
      {
        stepNumber: 7,
        title: 'Configure Firewall with iptables or UFW',
        content:
          'Local firewalls protect against attacks from systems in the same subnet and provide granular control over network traffic.',
        substeps: [
          'Choose your firewall: iptables (powerful) or UFW (simpler)',
          'For UFW: sudo apt install ufw && sudo ufw enable',
          'For iptables example configuration:',
          '  - Accept local interface: iptables -A INPUT -i lo -j ACCEPT',
          '  - Allow SSH: iptables -A INPUT -p tcp --dport 22 -m state --state NEW,ESTABLISHED -j ACCEPT',
          '  - Allow specific services (HTTP, HTTPS, SMTP, etc.)',
          '  - Drop all other input: iptables -A INPUT -j DROP',
          'Save rules to persist across reboots',
        ],
        tips: [
          'Use firewalls even behind network firewalls for defense in depth.',
          'Allow SSH only from specific IP addresses or bastion hosts when possible.',
        ],
        notes: [
          'Test firewall rules carefully to avoid locking yourself out of remote systems.',
          'Consider filtering outbound traffic as well for maximum security.',
        ],
      },
      {
        stepNumber: 8,
        title: 'Enable and Configure AppArmor',
        content:
          'AppArmor is a Linux security framework that restricts what processes can do. It acts like a prison guard, continuously monitoring processes to ensure they only perform allowed activities.',
        substeps: [
          'Check AppArmor status: sudo aa-status',
          'AppArmor has three modes: disabled, complain (monitoring only), and enforcing (blocking)',
          'Review loaded profiles and their current modes',
          'Enable AppArmor profiles for critical services',
          'Create custom profiles for your applications as needed',
          'Monitor AppArmor logs in /var/log/syslog or /var/log/audit/audit.log',
        ],
        tips: [
          'Start with complain mode to test policies before enforcing them.',
          'AppArmor is compiled into the Ubuntu kernel - no additional installation needed.',
        ],
        notes: [
          'Enforcing mode blocks unauthorized actions and logs them.',
          'Complain mode only logs violations without blocking - useful for policy development.',
        ],
      },
    ],
  },
  'windows-login-troubleshooting': {
    id: 'windows-login-troubleshooting',
    title: 'Windows Login Troubleshooting',
    subtitle: 'Complete guide to fix Windows login issues including incorrect password, missing password field, and account access problems',
    category: 'Windows Support Guide',
    readTime: '9 min read',
    totalSteps: 10,
    date: 'December 2024',
    overview:
      'Unable to log into Windows? Issues like "Incorrect username or password", "Cannot sign-into account", or graphical bugs like missing password fields can prevent access to your system. This comprehensive guide provides step-by-step solutions to regain access to your Windows account.',
    proTip: 'Start with the simpler solutions first before attempting advanced troubleshooting methods like Safe Mode or registry edits.',
    conclusion: 'If all troubleshooting steps fail, the Reset Device option will restore Windows to factory settings while optionally preserving your files.',
    steps: [
      {
        stepNumber: 1,
        title: 'Check Your Credentials',
        content:
          'Login failures often result from simple credential issues. Recent password changes may not have synced across all devices, or you might be using an incorrect username.',
        substeps: [
          'Verify you\'re entering the correct username (check for typos)',
          'Ensure Caps Lock is OFF - passwords are case-sensitive',
          'If you recently changed your password, allow time for the change to sync across devices',
          'Try typing your password in Notepad first to verify it before pasting into the login field',
          'Check if you\'re using a Microsoft account or local account - they require different credentials',
        ],
        tips: [
          'Microsoft accounts use your email address as the username, while local accounts use a custom username.',
          'If you recently changed your Microsoft account password online, it may take a few minutes to sync to your Windows device.',
        ],
        notes: [
          'Password synchronization issues are common after recent security credential changes.',
        ],
        screenshots: ['/blog/windows-login/Cant-log-into-Windows.webp'],
      },
      {
        stepNumber: 2,
        title: 'Change Login Method',
        content:
          'Windows offers multiple login methods. If one method isn\'t working, try switching to an alternative sign-in option.',
        substeps: [
          'On the login screen, click "Sign-in options"',
          'Try using a PIN if you\'ve set one up previously',
          'Attempt Windows Hello (face recognition or fingerprint) if configured',
          'Switch to password if you were trying biometric authentication',
          'For Microsoft accounts, try signing in with a security key if available',
        ],
        tips: [
          'PIN codes are device-specific and work even when your Microsoft account password has changed.',
          'Windows Hello biometric methods can fail due to poor lighting or sensor issues.',
        ],
        notes: [
          'Sign-in options only appear if you\'ve previously configured multiple authentication methods.',
        ],
      },
      {
        stepNumber: 3,
        title: 'Check for Keyboard Issues',
        content:
          'Hardware problems with your keyboard can prevent you from entering credentials correctly, causing login failures.',
        substeps: [
          'Test your keyboard in the username field - type some characters and verify they appear correctly',
          'Check if specific keys are stuck or not responding',
          'Try using the On-Screen Keyboard: Click the Ease of Access icon at bottom-right of login screen',
          'For wireless keyboards, verify the batteries are charged and the connection is active',
          'Test with a different keyboard if available (USB keyboard for laptops)',
          'Check for physical damage or liquid spills on the keyboard',
        ],
        tips: [
          'The On-Screen Keyboard bypasses physical keyboard issues and helps identify if the problem is hardware-related.',
          'Wireless keyboard connections can drop if the USB receiver is loose or batteries are low.',
        ],
        notes: [
          'Sticky keys or malfunctioning keyboard buttons can add unwanted characters to your password.',
        ],
      },
      {
        stepNumber: 4,
        title: 'Access Windows Safe Mode',
        content:
          'Safe Mode starts Windows with minimal drivers and services, bypassing software conflicts that might prevent normal login.',
        substeps: [
          'From the login screen, hold Shift and click the Power button → Restart',
          'Keep holding Shift until the "Choose an option" screen appears',
          'Select Troubleshoot → Advanced options → Startup Settings',
          'Click "Restart"',
          'After restart, press F4 to enable Safe Mode (or F5 for Safe Mode with Networking)',
          'Try logging in with your credentials in Safe Mode',
        ],
        tips: [
          'Safe Mode with Networking (F5) allows internet connectivity if you need to reset your Microsoft account password online.',
          'In Safe Mode, many startup programs and third-party software won\'t load, eliminating potential conflicts.',
        ],
        notes: [
          'Safe Mode uses a basic video driver, so the resolution may look different than normal.',
          'If you can log in successfully in Safe Mode, the issue is likely caused by a third-party application or driver.',
        ],
      },
      {
        stepNumber: 5,
        title: 'Enable Built-in Administrator Account',
        content:
          'If Safe Mode is not accessible or doesn\'t resolve the issue, enable the built-in Administrator account which has unrestricted access to the system.',
        substeps: [
          'Boot from Windows installation media (USB drive or DVD)',
          'At the Windows Setup screen, press Shift + F10 to open Command Prompt',
          'Type: net user administrator /active:yes and press Enter',
          'Type: net user administrator [newpassword] (replace [newpassword] with your desired password)',
          'Close Command Prompt and restart the computer',
          'Log in using the Administrator account',
          'Once logged in, you can reset your regular user account password',
        ],
        tips: [
          'The built-in Administrator account is disabled by default for security reasons.',
          'Remember to disable the Administrator account after fixing your login issue: net user administrator /active:no',
        ],
        notes: [
          'You\'ll need Windows installation media for this method. Create one using Microsoft\'s Media Creation Tool if needed.',
          'The built-in Administrator account has full system access and bypasses User Account Control (UAC).',
        ],
      },
      {
        stepNumber: 6,
        title: 'Perform BIOS/UEFI Reset',
        content:
          'BIOS/UEFI settings can sometimes interfere with Windows login. Resetting to default settings may resolve boot and login issues.',
        substeps: [
          'Restart your computer and press the BIOS key during startup (usually Del, F2, F10, or Esc)',
          'Look for "Load Setup Defaults", "Load Optimized Defaults", or "Reset to Default"',
          'Select the option to reset BIOS to factory defaults',
          'Save changes and exit (usually F10)',
          'Allow the computer to restart and try logging in',
        ],
        tips: [
          'The BIOS key varies by manufacturer - check your computer\'s manual or boot screen for the correct key.',
          'Resetting BIOS won\'t delete your Windows data, but may reset boot order and other hardware settings.',
        ],
        notes: [
          'Only use this method if other solutions haven\'t worked, as incorrect BIOS changes can cause boot issues.',
        ],
      },
      {
        stepNumber: 7,
        title: 'Run System File Checker Scan',
        content:
          'Corrupted system files can prevent Windows from loading the login screen properly or authenticating credentials.',
        substeps: [
          'Boot into Safe Mode with Command Prompt (Step 4, but press F6 instead of F4)',
          'At the command prompt, type: sfc /scannow and press Enter',
          'Wait for the scan to complete (this may take 15-30 minutes)',
          'If errors are found and fixed, restart the computer normally',
          'If SFC can\'t fix issues, run: DISM /Online /Cleanup-Image /RestoreHealth',
          'After DISM completes, run sfc /scannow again',
        ],
        tips: [
          'SFC (System File Checker) scans and repairs corrupted Windows system files.',
          'DISM (Deployment Image Servicing and Management) repairs the Windows system image that SFC uses.',
        ],
        notes: [
          'You need an active internet connection for DISM to download replacement files.',
          'These scans can take significant time - don\'t interrupt the process.',
        ],
      },
      {
        stepNumber: 8,
        title: 'Create a Temporary User Profile',
        content:
          'A corrupted user profile can cause login issues. Creating a temporary profile helps determine if the problem is profile-specific.',
        substeps: [
          'Log in using the built-in Administrator account (from Step 5)',
          'Open Settings → Accounts → Family & other users',
          'Click "Add someone else to this PC"',
          'Select "I don\'t have this person\'s sign-in information"',
          'Choose "Add a user without a Microsoft account"',
          'Create a local account with a username and password',
          'Change the account type to Administrator',
          'Log out and try signing into the new account',
          'If successful, you can transfer your files from the old profile',
        ],
        tips: [
          'The temporary profile should work normally if your original profile is corrupted.',
          'You can copy files from C:\\Users\\[OldUsername] to your new profile folder.',
        ],
        notes: [
          'Installed applications may not appear in the new profile and need reinstallation.',
        ],
      },
      {
        stepNumber: 9,
        title: 'Disable Group Policy Restrictions',
        content:
          'Group Policy settings can restrict login access. Disabling these policies may resolve authentication issues in domain or managed environments.',
        substeps: [
          'Boot into Safe Mode with Command Prompt',
          'Type: gpupdate /force and press Enter to refresh Group Policy',
          'Check for login restrictions by typing: gpresult /r',
          'If policies are blocking login, edit them via: gpedit.msc (if available)',
          'Navigate to: Computer Configuration → Windows Settings → Security Settings → Local Policies → User Rights Assignment',
          'Check "Allow log on locally" and "Deny log on locally" policies',
          'Ensure your user account is in the "Allow" list and not in "Deny"',
        ],
        tips: [
          'Group Policy Editor (gpedit.msc) is only available in Windows Pro, Enterprise, and Education editions.',
          'This is more relevant in corporate/domain environments than home systems.',
        ],
        notes: [
          'Modifying Group Policy settings incorrectly can cause system instability.',
          'Contact your IT administrator if you\'re on a corporate network before changing policies.',
        ],
      },
      {
        stepNumber: 10,
        title: 'Reset Windows (Last Resort)',
        content:
          'If all else fails, resetting Windows to factory settings will resolve most login issues but requires reinstalling applications.',
        substeps: [
          'From the login screen, hold Shift and click Power → Restart',
          'Select Troubleshoot → Reset this PC',
          'Choose "Keep my files" to preserve personal data, or "Remove everything" for a complete reset',
          'Select "Cloud download" for the latest Windows version, or "Local reinstall"',
          'Follow the on-screen prompts to complete the reset',
          'After reset, create a new user account or sign in with your Microsoft account',
        ],
        tips: [
          'Choose "Keep my files" to preserve documents, pictures, and personal files.',
          'All installed applications will be removed - you\'ll need to reinstall them.',
        ],
        notes: [
          'This process can take 1-3 hours depending on your system.',
          'Ensure your device is plugged in or fully charged before starting the reset.',
          'Windows will create a list of removed apps on your desktop after reset.',
        ],
      },
    ],
  },
  'network-design-guide': {
    id: 'network-design-guide',
    title: 'Professional Network Design Guide',
    subtitle: 'Complete step-by-step guide to designing scalable, secure, and reliable enterprise networks from requirements to deployment',
    category: 'Network Engineering Guide',
    readTime: '25 min read',
    totalSteps: 10,
    date: 'December 2024',
    overview:
      'Designing a network infrastructure requires careful planning and consideration of business requirements, security, scalability, and reliability. This comprehensive guide walks you through the entire network design process, from initial assessment to deployment and monitoring.',
    proTip: 'Always start with a thorough requirements assessment - a well-designed network addresses current needs while allowing for future growth.',
    conclusion: 'A well-designed network is the backbone of modern business operations. Regular monitoring and documentation ensure long-term success.',
    steps: [
      {
        stepNumber: 1,
        title: 'Network Requirements Assessment',
        content:
          'Understanding business and technical requirements is the foundation of good network design. Gather information about users, applications, data flows, and growth projections.',
        substeps: [
          'Identify the number of users and their locations (main office, branch offices, remote workers)',
          'Document critical applications and their bandwidth requirements (VoIP, video conferencing, cloud applications)',
          'Determine data storage needs and backup requirements',
          'Assess current network performance and pain points',
          'Project growth for the next 3-5 years (new users, locations, applications)',
          'Define security and compliance requirements (HIPAA, PCI-DSS, GDPR)',
          'Establish budget constraints and timeline',
        ],
        tips: [
          'Interview stakeholders from different departments to understand their specific needs.',
          'Document everything - requirements will guide all future design decisions.',
          'Consider both current needs and projected growth to avoid costly redesigns.',
        ],
        notes: [
          'Requirements assessment typically takes 1-2 weeks for small businesses, longer for enterprises.',
          'Underestimating growth is a common mistake - always plan for at least 30% more capacity than currently needed.',
        ],
        screenshots: ['/blog/network-design/1_network_requirements_assessment.png'],
      },
      {
        stepNumber: 2,
        title: 'Select Network Topology',
        content:
          'Choose the appropriate network topology based on your requirements. Common topologies include star, mesh, and hybrid designs.',
        substeps: [
          'Star Topology: Best for small to medium businesses - all devices connect to a central switch/router',
          'Mesh Topology: Provides redundancy - multiple paths between devices, ideal for mission-critical networks',
          'Hybrid Topology: Combines multiple topologies - star at access layer, mesh at core for redundancy',
          'Consider physical layout of buildings and offices',
          'Plan for redundant paths for critical services',
          'Design hierarchical network: Core, Distribution, and Access layers',
        ],
        tips: [
          'Hierarchical three-tier design (Core-Distribution-Access) is industry best practice for scalability.',
          'For small networks, collapsed core (combining core and distribution) reduces costs.',
        ],
        notes: [
          'Core Layer: High-speed backbone connecting distribution layers',
          'Distribution Layer: Aggregates access layer switches, implements policies and routing',
          'Access Layer: Provides user connectivity to the network',
        ],
        screenshots: ['/blog/network-design/2_network_topology_hierarchical.png'],
      },
      {
        stepNumber: 3,
        title: 'Design IP Addressing Scheme',
        content:
          'A well-planned IP addressing scheme is critical for network organization, scalability, and troubleshooting. Use private IP ranges and implement subnetting.',
        substeps: [
          'Choose private IP range: 10.0.0.0/8 (large), 172.16.0.0/12 (medium), or 192.168.0.0/16 (small)',
          'Create subnetting plan based on departments, locations, or functions',
          'Reserve IP ranges for different purposes: Servers (10.0.10.0/24), Workstations (10.0.20.0/24), Printers (10.0.30.0/24)',
          'Plan for VLANs and assign IP subnet to each VLAN',
          'Document IP allocation in a spreadsheet (Network, Subnet Mask, Gateway, VLAN, Purpose)',
          'Reserve first 10-20 IPs in each subnet for static assignments (servers, network devices)',
          'Configure DHCP pools starting from .50 or .100 to leave room for static IPs',
        ],
        tips: [
          'Use /24 subnets (254 hosts) for most departments - they\'re easy to calculate and manage.',
          'Leave gaps between subnets for future expansion (e.g., use 10.0.10.0/24, 10.0.20.0/24, 10.0.30.0/24)',
          'Use meaningful subnet numbers: 10.0.10.x for IT, 10.0.20.x for HR, 10.0.30.x for Finance',
        ],
        notes: [
          'Private IP ranges are not routable on the internet - use NAT for internet access.',
          'IPv6 implementation should be considered for future-proofing.',
        ],
        screenshots: ['/blog/network-design/3_ip_addressing_scheme.png'],
      },
      {
        stepNumber: 4,
        title: 'Select Network Hardware',
        content:
          'Choose appropriate routers, switches, firewalls, and wireless access points based on performance requirements and budget.',
        substeps: [
          'Core Router/Firewall: Select based on WAN bandwidth and security features (throughput, VPN support, IPS/IDS)',
          'Core Switches: High-capacity Layer 3 switches with 10Gb uplinks for redundancy',
          'Distribution Switches: Layer 3 switches with adequate port density and PoE+ for access layer',
          'Access Switches: Managed switches with PoE for phones and APs, consider port count (24/48 port)',
          'Wireless Access Points: Coverage, capacity (concurrent users), and standards (Wi-Fi 6/6E)',
          'Calculate total bandwidth: Users × Average bandwidth per user + Overhead (20-30%)',
          'Ensure all devices support required features: VLANs, QoS, link aggregation, spanning tree',
        ],
        tips: [
          'Enterprise-grade equipment (Cisco, HPE, Juniper) offers better reliability and support than consumer gear.',
          'Always buy 20-30% more capacity than currently needed.',
          'PoE+ (802.3at) provides 25.5W per port - sufficient for most phones and access points.',
        ],
        notes: [
          'Used/refurbished enterprise equipment can save 50-70% while providing enterprise features.',
          'Consider vendor ecosystem - mixing vendors complicates management.',
        ],
        screenshots: ['/blog/network-design/4_network_hardware_selection.png'],
      },
      {
        stepNumber: 5,
        title: 'Implement VLAN Segmentation',
        content:
          'VLANs logically segment the network for security, performance, and management. Separate traffic by department, function, or security level.',
        substeps: [
          'Create VLAN plan: VLAN 10 (Management), VLAN 20 (Data/Users), VLAN 30 (VoIP), VLAN 40 (Guest), VLAN 50 (Servers)',
          'Configure trunk links between switches to carry multiple VLANs',
          'Set native VLAN to unused VLAN (not VLAN 1) for security',
          'Configure inter-VLAN routing on Layer 3 switch or router',
          'Implement access control lists (ACLs) to control traffic between VLANs',
          'Tag Voice VLAN for QoS priority on IP phones',
          'Document VLAN assignments for each switch port',
        ],
        tips: [
          'Keep management VLAN separate and restrict access to network administrators only.',
          'Guest network should be completely isolated from internal resources.',
          'VoIP traffic in separate VLAN allows easy QoS prioritization.',
        ],
        notes: [
          'Trunk ports carry multiple VLANs (switch-to-switch connections).',
          'Access ports belong to one VLAN (end-device connections).',
          'Native VLAN is the default VLAN for untagged traffic - should not be VLAN 1.',
        ],
        screenshots: ['/blog/network-design/5_vlan_segmentation.png'],
      },
      {
        stepNumber: 6,
        title: 'Design Security Architecture',
        content:
          'Implement defense-in-depth security: perimeter security, internal segmentation, access control, and monitoring.',
        substeps: [
          'Deploy next-generation firewall (NGFW) at network edge with IPS/IDS capabilities',
          'Implement DMZ (demilitarized zone) for public-facing servers',
          'Configure firewall rules following least-privilege principle (deny all, allow specific)',
          'Enable Network Access Control (NAC) to validate devices before network access',
          'Deploy antivirus and endpoint protection on all workstations',
          'Implement wireless security: WPA3-Enterprise with RADIUS authentication',
          'Enable port security on switches to prevent unauthorized device connections',
          'Configure logging and monitoring for security events',
        ],
        tips: [
          'Defense-in-depth means multiple layers of security - if one fails, others still protect.',
          'Regular security audits and penetration testing identify vulnerabilities.',
          'Keep firmware and security definitions updated on all network devices.',
        ],
        notes: [
          'DMZ hosts public servers (web, email) separate from internal network.',
          'NAC (802.1X) provides user/device authentication before granting network access.',
        ],
        screenshots: ['/blog/network-design/6_security_architecture.png'],
      },
      {
        stepNumber: 7,
        title: 'Plan Redundancy and High Availability',
        content:
          'Eliminate single points of failure with redundant hardware, connections, and failover mechanisms.',
        substeps: [
          'Deploy dual ISP connections from different providers for internet redundancy',
          'Implement dual core switches with VRRP/HSRP for gateway redundancy',
          'Configure link aggregation (LACP) for increased bandwidth and redundancy',
          'Enable Spanning Tree Protocol (STP) to prevent loops while providing alternate paths',
          'Deploy redundant power supplies in critical infrastructure',
          'Use UPS (uninterruptible power supply) for network equipment',
          'Implement server clustering and load balancing for critical services',
          'Plan for disaster recovery with offsite backups and alternate sites',
        ],
        tips: [
          'Test failover scenarios regularly to ensure redundancy works when needed.',
          'Dual ISPs should use different technologies (fiber + cable) or routes to avoid common failures.',
          'Document failover procedures and recovery time objectives (RTO).',
        ],
        notes: [
          'VRRP/HSRP provides automatic gateway failover in seconds.',
          'Link aggregation (LACP/802.3ad) combines multiple links for bandwidth and redundancy.',
          'Spanning Tree prevents broadcast storms but can take 30-50 seconds to converge.',
        ],
        screenshots: ['/blog/network-design/7_redundancy_and_ha.png'],
      },
      {
        stepNumber: 8,
        title: 'Implement Quality of Service (QoS)',
        content:
          'Prioritize critical traffic (voice, video) over less important traffic (file downloads) to ensure consistent performance.',
        substeps: [
          'Identify traffic types and priority levels: Voice (highest), Video (high), Business apps (medium), Internet (low)',
          'Configure QoS on all Layer 2 and Layer 3 devices',
          'Use DSCP markings for Layer 3 QoS classification',
          'Implement traffic shaping to prevent bandwidth hogging',
          'Set bandwidth reservations for critical applications',
          'Configure weighted fair queuing or priority queuing',
          'Test QoS effectiveness under network load',
        ],
        tips: [
          'VoIP requires <150ms latency, <30ms jitter, and <1% packet loss for good quality.',
          'Mark traffic as close to the source as possible (IP phones self-mark).',
          'QoS only helps when network is congested - it doesn\'t increase total bandwidth.',
        ],
        notes: [
          'DSCP values: EF (46) for voice, AF41 (34) for video, BE (0) for best effort.',
          'Trust boundaries define where QoS markings are trusted vs. remarked.',
        ],
        screenshots: ['/blog/network-design/8_qos_prioritization.png'],
      },
      {
        stepNumber: 9,
        title: 'Create Network Documentation',
        content:
          'Comprehensive documentation is essential for troubleshooting, training, and future expansion. Document everything.',
        substeps: [
          'Create network topology diagrams using Visio, Lucidchart, or Draw.io',
          'Document IP addressing scheme in spreadsheet with all subnets and assignments',
          'Create rack elevation diagrams showing physical equipment placement',
          'Document all device configurations and backup configs regularly',
          'Create cable plant documentation with patch panel labeling',
          'Maintain change log for all network modifications',
          'Document VLANs, ACLs, and security policies',
          'Create runbooks for common procedures and troubleshooting',
        ],
        tips: [
          'Use consistent naming conventions for devices: SITE-FUNCTION-NUMBER (NYC-SW-01).',
          'Store documentation in centralized, version-controlled location.',
          'Update documentation whenever changes are made - outdated docs are worse than no docs.',
        ],
        notes: [
          'Good documentation saves hours during troubleshooting and outages.',
          'Include vendor support contacts and warranty information.',
        ],
        screenshots: ['/blog/network-design/9_network_documentation.png'],
      },
      {
        stepNumber: 10,
        title: 'Deploy Monitoring and Management',
        content:
          'Implement network monitoring tools to detect issues before they impact users. Establish baselines and alerting.',
        substeps: [
          'Deploy SNMP monitoring solution (PRTG, Nagios, Zabbix, SolarWinds)',
          'Configure device monitoring: CPU, memory, interface utilization, errors',
          'Set up NetFlow/sFlow for traffic analysis and bandwidth monitoring',
          'Implement syslog server for centralized logging',
          'Configure SNMP traps and email alerts for critical events',
          'Create dashboards showing network health and key metrics',
          'Establish performance baselines for normal operation',
          'Configure automatic configuration backups',
          'Set up availability monitoring with uptime tracking',
        ],
        tips: [
          'Monitor bandwidth utilization - plan to upgrade when consistently above 70%.',
          'Set alert thresholds to avoid false alarms: 80% for warnings, 90% for critical.',
          'Review monitoring data weekly to identify trends and potential issues.',
        ],
        notes: [
          'SNMP v3 provides encryption - avoid SNMP v1/v2c in production.',
          'NetFlow provides detailed traffic analysis: who, what, when, where.',
          'Baseline your network during normal operation - this becomes your reference for "normal".',
        ],
        screenshots: ['/blog/network-design/10_monitoring_and_management.png'],
      },
    ],
  },
};
