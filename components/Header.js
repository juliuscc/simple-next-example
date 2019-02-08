import Link from 'next/link'
import styled from 'styled-components'

const HeaderLink = styled.a`
	margin-right: 15px;
`

const Header = () => (
	<div>
		<Link href="/" passHref>
			<HeaderLink>Home</HeaderLink>
		</Link>
		<Link href="/about" passHref>
			<HeaderLink>About</HeaderLink>
		</Link>
	</div>
)

export default Header
