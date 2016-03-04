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
               onShowOthers={this.showOthers} />
    )
  }
}
```

### Configuration

The `Summary` component expects the following props.

| Parameter        | Default                        |        |
| :-------------   |:-------------------------------| :-----  |
| items            | []                             | Collection that will be aggregated |
| max              | 3                              | Maximum visible item  |
| text             | Object. Explained on the following table. | Translations of visible texts  |
| preventSingleRemain | false                           | Prevents `and 1 more` text |
| onShowOthers          | No-op function            | Callback for `show others` link  |


Translation strings:

| Parameter        | Default                        | 
| :-------------   |:-------------------------------| 
| more            | 'more'                             | 
| and              | 'and'                              |
| none             | 'none' | Translations of visible texts  |


### Contributors (You can add your name here in your pull-request)

- Fatih Erikli <fatiherikli@gmail.com>

