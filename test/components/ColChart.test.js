import renderer from 'react-test-renderer'
import ColChart from '../../src/components/ColChart'

it('Should render the ColChart HTML correctly against the snapshot', () => {

  const colChartDataPoints = [
    {
        "y": 2,
        "x": "21-30"
    },
    {
        "y": 1,
        "x": "31-40"
    },
    {
        "y": 2,
        "x": "41-50"
    }
  ];

  const config = {
    "title": "Users by age group",
    "xLabel": "Ages in years",
    "tooltipLabel": "User(s)",
    "width": "500px",
    "height": "300px"
  };

  const component = renderer.create(<ColChart dataPoints={colChartDataPoints} config={config}/ >);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  {/* // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot(); */}
});