import { render , fireEvent} from '@testing-library/react';
import FlightList from './FlighList'

describe('FlightList', () => {
  const flights = [
    { airline: 'Airline A', price: 100 },
    { airline: 'Airline B', price: 200 },
  ];

  test('renders without crashing', () => {
    const { getByPlaceholderText, getByText } = render(<FlightList flights={flights} />);
    
    expect(getByPlaceholderText('Filter by Airline')).toBeInTheDocument();
    expect(getByText('Airline A')).toBeInTheDocument();
    expect(getByText('₹100')).toBeInTheDocument();
  });
});


describe('FlightList - Sort Functionality', () => {
    const flights = [
      { airline: 'Airline A', price: 300 },
      { airline: 'Airline B', price: 100 },
      { airline: 'Airline C', price: 200 },
    ];
  
    test('sorts flights from high to low', () => {
      const { getByText, getAllByText } = render(<FlightList flights={flights} />);
      const select = getByText('Price: Low to High').parentNode;
      
      fireEvent.change(select, { target: { value: 'desc' } });
  
      const prices = getAllByText(/₹/).map((node) => node.textContent);
      expect(prices).toEqual(['₹300', '₹200', '₹100']);
    });
  });

  describe('FlightList - Filter Functionality', () => {
    const flights = [
      { airline: 'Airline A', price: 100 },
      { airline: 'Airline B', price: 200 },
    ];
  
    test('filters flights by airline', () => {
      const { getByPlaceholderText, queryByText } = render(<FlightList flights={flights} />);
      
      fireEvent.change(getByPlaceholderText('Filter by Airline'), { target: { value: 'Airline B' } });
  
      expect(queryByText('Airline A')).not.toBeInTheDocument();
      expect(queryByText('Airline B')).toBeInTheDocument();
    });
  });