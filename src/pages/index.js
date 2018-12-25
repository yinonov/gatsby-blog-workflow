import React from 'react';
import { graphql, Link } from 'gatsby';
import Header from '../components/header';

const Layout = ({ data: { allMarkdownRemark: { edges } } }) => {
	return (
		<div>
			<Header />
			<div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
				{edges.map((edge) => {
					const { frontmatter: { path, title } } = edge.node;
                    return <div key={path}>
                        <Link to={path}>
                            {title}
                        </Link>
                    </div>;
				})}
			</div>
            <div>
                <Link to='/tags'>Browse by Tag</Link>
            </div>
		</div>
	);
};

export const query = graphql`
	query HomepageQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					frontmatter {
						title
						path
						date
					}
				}
			}
		}
	}
`;

export default Layout;
