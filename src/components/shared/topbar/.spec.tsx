import { shallow, ShallowWrapper } from 'enzyme'
import Topbar from '.'


describe('Topbar', (): void => {
  let wrapper: ShallowWrapper

  beforeEach((): void => {
    wrapper = shallow(
      <Topbar
        onGoBack={() => {}}
        onSearch={() => {}}
      />,
    )
  })

  it('renders component', (): void => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
