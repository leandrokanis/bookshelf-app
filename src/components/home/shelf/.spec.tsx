import { shallow, ShallowWrapper } from 'enzyme'
import faker from 'faker'
import Shelf from '.'
import { mockVolume } from '../../../models/mocks'


describe('Shelf', (): void => {
  let wrapper: ShallowWrapper

  beforeEach((): void => {
    wrapper = shallow(
      <Shelf
        title={faker.lorem.sentence()}
        volumes={[mockVolume()]}
      >
        <></>
      </Shelf>,
    )
  })

  it('renders component', (): void => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
