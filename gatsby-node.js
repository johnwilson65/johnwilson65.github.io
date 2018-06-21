/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require('path');

 exports.createPages = ({ boundActionCreators, graphql }) => {
 	const { createPage } = boundActionCreators;

 	const serviceTemplate = path.resolve(`src/templates/serviceTemplate.js`);

 	return graphql(`
 	{
 		allMarkdownRemark(
 			sort: { order: DESC, fields: [frontmatter___title] }
 			limit: 1000
 		) {
 			edges {
 				node {
 					frontmatter {
 						path
 					}
 				}
 			}
 		}
 	}
 	`).then(result => {
 		if(result.error) {
 			return Promise.reject(result.errors);
 		}

 		result.data.allMarkdownRemark.edges.forEach(({ node} ) => {
 			createPage({
 				path: node.frontmatter.path,
 				component: serviceTemplate,
 				context: {}
 			});
 		});
 	});
 };