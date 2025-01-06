import r2wc from "@r2wc/react-to-web-component"
import { RandomNumberComponent } from "./components/RandomNumberComponent"

const RandomNumberComponentWebComponent = r2wc(RandomNumberComponent)

customElements.define("mando-random-number", RandomNumberComponentWebComponent)