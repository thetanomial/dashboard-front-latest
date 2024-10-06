// linkMappings.js
const linkMappings = [
    {
        id: 1,
        name: 'Social-Media',
        subLinks: [
            { id: 1, name: 'Content Strategy', path: '/dashboard/social-media/content-strategy', isLocked: false },
            { id: 2, name: 'Influencers', path: '/dashboard/social-media/influencers', isLocked: true },
            { id: 3, name: 'Festive Calendar', path: '/dashboard/social-media/festive-calendar', isLocked: false },
        ],
    },
    {
        id: 2,
        name: 'Accounting',
        subLinks: [
            { id: 1, name: 'Invoices', path: '/dashboard/accounting/invoices', isLocked: true },
            { id: 2, name: 'Reports', path: '/dashboard/accounting/reports', isLocked: false },
        ],
    },
    {
        id: 3,
        name: 'Human-Resources',
        subLinks: [
            { id: 0, name: 'Overview', path: '/dashboard/human-resources/hr_overview', isLocked: false },
            { id: 1, name: 'Employee Records', path: '/dashboard/human-resources/employee-records', isLocked: true },
            { id: 2, name: 'Payroll', path: '/dashboard/human-resources/payroll', isLocked: false },
            { id: 3, name: 'Performance Reviews', path: '/dashboard/human-resources/performance-reviews', isLocked: false },
        ],
    },
    {
        id: 4,
        name: 'Legal',
        subLinks: [
            { id: 1, name: 'Contracts', path: '/dashboard/legal/contracts', isLocked: false },
            { id: 2, name: 'Compliance', path: '/dashboard/legal/compliance', isLocked: true },
            { id: 3, name: 'Intellectual Property', path: '/dashboard/legal/intellectual-property', isLocked: false },
        ],
    },
    // Add more sections as needed
];

export default linkMappings;
