import { colors as colorBases } from '../styles'
import { CHANGE_COLOR } from '../actions/colors'

const color = colorBases.one

const initialState = { 
  ui: {
    colorAccent: color.accent,
    colorDark: color.dark,
    colorPrimary: color.primary,
    colorText: {
      color: color.accent
    },
    colorBackgroud: {
      backgroundColor: color.dark
    },
    colorButtons: {
      borderColor: color.primary,
      backgroundColor: color.primary
    },
    colorButtonBorder: {
      borderColor: color.primary
    },
    colorBorder: {
      borderColor: color.accent,
    }
  }
}

const colors = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, 
        ui: {
          colorAccent: colorBases[action.color].accent,
          colorDark: colorBases[action.color].dark,
          colorPrimary: colorBases[action.color].primary,
          colorText: {
            color: colorBases[action.color].accent
          },
          colorBackgroud: {
            backgroundColor: colorBases[action.color].dark
          },
          colorButtons: {
            borderColor: colorBases[action.color].primary,
            backgroundColor: colorBases[action.color].primary
          },
          colorButtonBorder: {
            borderColor: colorBases[action.color].primary
          },
          colorBorder: {
            borderColor: colorBases[action.color].accent,
          }
        }
      }
    default:
      return state
  }
}

export default colors