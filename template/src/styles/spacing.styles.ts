import {StyleSheet} from 'react-native';

const isMargin = (property: string) => property === 'margin';

const spacing = (property: string, prefix: string, size: number) => {
  const sizeSpacing = size * 4;

  return {
    //
    [`${prefix}${size}`]: isMargin(property)
      ? {
          margin: sizeSpacing,
        }
      : {
          padding: sizeSpacing,
        },

    [`${prefix}x${size}`]: isMargin(property)
      ? {
          marginHorizontal: sizeSpacing,
        }
      : {
          paddingHorizontal: sizeSpacing,
        },

    [`${prefix}y${size}`]: isMargin(property)
      ? {
          marginVertical: sizeSpacing,
        }
      : {
          paddingVertical: sizeSpacing,
        },

    [`${prefix}l${size}`]: isMargin(property)
      ? {
          marginLeft: sizeSpacing,
        }
      : {
          paddingLeft: sizeSpacing,
        },

    [`${prefix}r${size}`]: isMargin(property)
      ? {
          marginRight: sizeSpacing,
        }
      : {
          paddingRight: sizeSpacing,
        },

    [`${prefix}b${size}`]: isMargin(property)
      ? {
          marginBottom: sizeSpacing,
        }
      : {
          paddingBottom: sizeSpacing,
        },

    [`${prefix}t${size}`]: isMargin(property)
      ? {
          marginTop: sizeSpacing,
        }
      : {
          paddingTop: sizeSpacing,
        },
  };
};

export let spacingObject = {};

for (let i = 0; i <= 10; i++) {
  spacingObject = {
    ...spacingObject,
    ...spacing('margin', 'm', i),
    ...spacing('padding', 'p', i),
  };
}

export const spacingStyles = StyleSheet.create(
  //
  spacingObject,
);
