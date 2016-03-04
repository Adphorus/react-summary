React-Summary
=============

Summaries for react components.

### Usage

```javascript
import Summary from 'react-summary';

class App() {
  showOthers() {
  	// others
  }

  render() {
    return (
      <Summary items={['hey', 'foo', 'bar', 'selam']}
               max={2}
               onShowOthers={this.showOthers} />
    )
  }
}
```

![Screenshot](http://i.imgur.com/TCaINON.png 'Screenshot')

### Configuration

The `Summary` component expects the following props.

| Parameter        | Default                        |        |
| :-------------   |:-------------------------------| :-----  |
| items            | []                             | The collection that will be aggregated |
| max              | 3                              | Maximum visible item count |
| text             | Object. Explained on the following table. | Translations of visible texts  |
| preventSingleRemain | false                           | Prints the last item instead of `and 1 more` text |
| onShowOthers          | No-op function            | Callback function for `show others` link  |


Translation strings:

| Parameter        | Default                        | 
| :-------------   |:-------------------------------| 
| more            | 'more'                             | 
| and              | 'and'                              |
| none             | 'none' | Translations of visible texts  |


### Contributors (You can add your name here in your pull-request)

- Fatih Erikli <fatiherikli@gmail.com>

