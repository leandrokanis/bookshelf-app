import { shallow, ShallowWrapper } from 'enzyme'
import Volume from '.'


describe('Volume', (): void => {
  let wrapper: ShallowWrapper

  beforeEach((): void => {
    wrapper = shallow(
      <Volume />,
    )
  })

  it('renders component', (): void => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
