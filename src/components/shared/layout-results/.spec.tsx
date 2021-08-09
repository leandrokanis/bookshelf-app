import { shallow, ShallowWrapper } from 'enzyme'
import LayoutResults from '.'


describe('LayoutResults', (): void => {
  let wrapper: ShallowWrapper

  beforeEach((): void => {
    wrapper = shallow(
      <LayoutResults><></></LayoutResults>,
    )
  })

  it('renders component', (): void => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
