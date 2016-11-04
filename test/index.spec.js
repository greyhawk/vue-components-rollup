import MyComponent from './../components/MyComponent.vue';

describe('MyComponent', () => {
  it('has msg prop', () => {
    expect(typeof MyComponent.props.msg).toBe('object');
  });
  it('msg prop has the default value "Hello world"', () => {
    expect(MyComponent.props.msg.default).toBe('Hello world');
  });
});
