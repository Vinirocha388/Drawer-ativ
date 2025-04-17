import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  const handleNumberInput = (num) => {
    if (waitingForSecondValue) {
      setDisplayValue(String(num));
      setWaitingForSecondValue(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(num) : displayValue + num);
    }
  };

  const handleOperator = (op) => {
    const currentValue = parseFloat(displayValue);
    
    if (firstValue === '') {
      setFirstValue(currentValue);
      setOperator(op);
      setWaitingForSecondValue(true);
      return;
    }

    if (operator) {
      const result = performCalculation();
      setDisplayValue(String(result));
      setFirstValue(result);
    } else {
      setFirstValue(currentValue);
    }

    setOperator(op);
    setWaitingForSecondValue(true);
  };

  const performCalculation = () => {
    const currentValue = parseFloat(displayValue);
    const previousValue = parseFloat(firstValue);

    switch (operator) {
      case '+':
        return previousValue + currentValue;
      case '-':
        return previousValue - currentValue;
      case '×':
        return previousValue * currentValue;
      case '÷':
        return previousValue / currentValue;
      default:
        return currentValue;
    }
  };

  const handleEqual = () => {
    if (!operator || firstValue === '') return;
    
    const result = performCalculation();
    setDisplayValue(String(result));
    setFirstValue('');
    setOperator(null);
    setWaitingForSecondValue(false);
  };

  const handleClear = () => {
    setDisplayValue('0');
    setFirstValue('');
    setOperator(null);
    setWaitingForSecondValue(false);
  };

  const handleBackspace = () => {
    if (displayValue.length === 1) {
      setDisplayValue('0');
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  const handlePercentage = () => {
    const currentValue = parseFloat(displayValue);
    setDisplayValue(String(currentValue / 100));
  };

  const handleToggleSign = () => {
    const currentValue = parseFloat(displayValue);
    setDisplayValue(String(currentValue * -1));
  };

  const handleDecimal = () => {
    if (waitingForSecondValue) {
      setDisplayValue('0.');
      setWaitingForSecondValue(false);
      return;
    }

    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.display}>
            <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
              {displayValue}
            </Text>
          </View>
          
          <View style={styles.buttons}>
            <View style={styles.row}>
              <TouchableOpacity style={[styles.button, styles.functionButton]} onPress={handleClear}>
                <Text style={styles.functionButtonText}>AC</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.functionButton]} onPress={handleToggleSign}>
                <Text style={styles.functionButtonText}>+/-</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.functionButton]} onPress={handlePercentage}>
                <Text style={styles.functionButtonText}>%</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperator('÷')}>
                <Text style={styles.operatorButtonText}>÷</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.row}>
              <TouchableOpacity style={styles.button} onPress={() => handleNumberInput('7')}>
                <Text style={styles.buttonText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleNumberInput('8')}>
                <Text style={styles.buttonText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleNumberInput('9')}>
                <Text style={styles.buttonText}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperator('×')}>
                <Text style={styles.operatorButtonText}>×</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.row}>
              <TouchableOpacity style={styles.button} onPress={() => handleNumberInput('4')}>
                <Text style={styles.buttonText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleNumberInput('5')}>
                <Text style={styles.buttonText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleNumberInput('6')}>
                <Text style={styles.buttonText}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperator('-')}>
                <Text style={styles.operatorButtonText}>-</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.row}>
              <TouchableOpacity style={styles.button} onPress={() => handleNumberInput('1')}>
                <Text style={styles.buttonText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleNumberInput('2')}>
                <Text style={styles.buttonText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleNumberInput('3')}>
                <Text style={styles.buttonText}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperator('+')}>
                <Text style={styles.operatorButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.row}>
              <TouchableOpacity style={[styles.button, styles.zeroButton]} onPress={() => handleNumberInput('0')}>
                <Text style={styles.buttonText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleDecimal}>
                <Text style={styles.buttonText}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.equalButton]} onPress={handleEqual}>
                <Text style={styles.operatorButtonText}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');
const calculatorWidth = Math.min(width - 40, 400);

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
  },
  cardContainer: {
    width: calculatorWidth,
    borderRadius: 24,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  card: {
    padding: 16,
    borderRadius: 24,
    backgroundColor: '#1a202c',
  },
  display: {
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  displayText: {
    fontSize: 48,
    fontWeight: '300',
    color: '#fff',
  },
  buttons: {
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: 65,
    borderRadius: 20,
    margin: 4,
  },
  zeroButton: {
    flex: 2.1,
    paddingLeft: 25,
    alignItems: 'flex-start',
  },
  buttonText: {
    fontSize: 26,
    fontWeight: '500',
    color: '#fff',
  },
  functionButton: {
    backgroundColor: 'rgba(169, 169, 169, 0.25)',
  },
  functionButtonText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#fff',
  },
  operatorButton: {
    backgroundColor: '#ff9f0a',
  },
  equalButton: {
    backgroundColor: '#ff9f0a',
  },
  operatorButtonText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#fff',
  },
});