import chai from 'chai'
import { mount, chaiPlugin } from 'vue-test'
import Home from 'src/pages/Home'

chai.use(chaiPlugin)

const mc = mount(Home)

describe('Home.vue', () => {
    it('should render DOM', () => {
        expect(mc).to.be.ok
    })
})
