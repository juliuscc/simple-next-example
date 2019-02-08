import Header from './Header'
import styled from 'styled-components'

const LayoutWrapper = styled.div`
	margin: 20px;
	padding: 20px;
	border: 1px solid #ddd;
`

const Layout = props => (
	<LayoutWrapper>
		<Header />
		{props.children}
	</LayoutWrapper>
)

export default Layout
