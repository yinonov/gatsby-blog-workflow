module.exports = {
    siteMetadata: {
        title: 'My Blog',
        description: 'This is my cool blog.'
    },
    plugins: [
        'gatsby-transformer-remark',
        // You can have multiple instances of this plugin
        // to read source nodes from different locations on your
        // filesystem.
        //
        // The following sets up the Jekyll pattern of having a
        // "pages" directory for Markdown files and a "data" directory
        // for `.json`, `.yaml`, `.csv`.
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`
            }
        }
    ]
};