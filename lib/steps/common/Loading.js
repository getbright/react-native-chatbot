import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { DotIndicator } from 'react-native-indicators';

const Loading = (props) => {
  const { custom, color } = props;
  let style = { paddingTop: 6 };

  if (custom) {
    style = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    };
  }

  return (
    <View style={style}>
      <DotIndicator
        count={3}
        color={color}
        animationDuration={800}
      />
    </View>
  );
};

Loading.propTypes = {
  color: PropTypes.string.isRequired,
  custom: PropTypes.bool,
};

Loading.defaultProps = {
  custom: false,
};

export default Loading;
