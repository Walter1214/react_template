import { styled, css, mq } from 'js/lib/plugins/emotion'
import Global from './global'
import Theme from './theme'
import Reboot from './reboot'
import Layout from './layout'
import normalize from 'normalize.css'

console.log(Global)

export const styles = css`
	${normalize}
	${Global}
`

export { Theme, Layout }
