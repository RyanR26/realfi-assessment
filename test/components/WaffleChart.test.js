import renderer from 'react-test-renderer'
import WaffleChart from '../../src/components/WaffleChart'

it('Should render the ColChart HTML correctly against the snapshot', () => {

  const waffleChartDataPoints = [
    {
        "value": 2,
        "label": "Latvia"
    },
    {
        "value": 1,
        "label": "Spain"
    },
    {
        "value": 1,
        "label": "Germany"
    },
    {
        "value": 1,
        "label": "China"
    }
];

  const config = {
    "title": "User percentage by country",
    "tooltipLabel": "of users",
    "width": "300px",
    "height": "300px",
    "groupClasses": [
        "bg-primary",
        "bg-secondary",
        "bg-accent",
        "bg-neutral-content"
    ]
  };

  const component = renderer.create(<WaffleChart dataPoints={waffleChartDataPoints} config={config}/ >);
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