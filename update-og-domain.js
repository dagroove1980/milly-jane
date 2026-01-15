#!/usr/bin/env node
/**
 * Script to update OG image URLs with the actual domain
 * Usage: node update-og-domain.js [domain]
 * Example: node update-og-domain.js milly-jane.vercel.app
 */

const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'public', 'index.html');
let domain = process.argv[2];

// If no domain provided, try to get it from Vercel config or ask user
if (!domain) {
    try {
        // Try to read from .vercel/project.json if it exists
        const vercelConfig = path.join(__dirname, '.vercel', 'project.json');
        if (fs.existsSync(vercelConfig)) {
            const config = JSON.parse(fs.readFileSync(vercelConfig, 'utf8'));
            // Vercel config might have the domain info
            console.log('Found Vercel config, but domain detection not implemented.');
            console.log('Please provide your domain as an argument:');
            console.log('  node update-og-domain.js your-domain.vercel.app');
            process.exit(1);
        }
    } catch (e) {
        // Ignore errors
    }
    
    console.log('Please provide your Vercel domain:');
    console.log('  node update-og-domain.js your-domain.vercel.app');
    console.log('\nOr your custom domain:');
    console.log('  node update-og-domain.js www.yourdomain.com');
    process.exit(1);
}

// Ensure domain doesn't have protocol
domain = domain.replace(/^https?:\/\//, '').replace(/\/$/, '');

// Read HTML file
let html = fs.readFileSync(htmlPath, 'utf8');

// Replace placeholder with actual domain
const replacements = [
    { from: 'https://YOUR_DOMAIN_HERE/', to: `https://${domain}/` },
    { from: 'https://YOUR_DOMAIN_HERE', to: `https://${domain}` }
];

replacements.forEach(({ from, to }) => {
    html = html.replace(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), to);
});

// Write back
fs.writeFileSync(htmlPath, html, 'utf8');

console.log(`✅ Successfully updated OG image URLs to use domain: ${domain}`);
console.log(`   Image URL: https://${domain}/assets/images/albertresize-1792x1024.png`);
