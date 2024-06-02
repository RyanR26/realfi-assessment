import renderer from 'react-test-renderer'
import BubbleChart from '../../src/components/BubbleChart'

it('Should render the BubbleChart HMTL correctly against the snapshot', () => {

  const bubbleChartDataPoints = [
    {
        "value": 9,
        "label": "Latvia"
    },
    {
        "value": 2,
        "label": "Germany"
    },
    {
        "value": 1,
        "label": "China"
    },
    {
        "value": 0,
        "label": "Spain"
    }
  ];

  const config = {
    "title": "Dependents by country",
    "tooltipLabel": "Dependant(s)",
    "height": "300px",
    "width": "300px",
    "containerPadding": "40px",
    "groupClasses": [
        "bg-primary",
        "bg-secondary",
        "bg-accent"
    ]
  };

  const component = renderer.create(<BubbleChart dataPoints={bubbleChartDataPoints} config={config}/ >);
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