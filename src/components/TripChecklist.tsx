
import { useState } from 'react';

const TripChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set([0, 2]));

  const checklistItems = [
    'Book flight tickets',
    'Apply for visa (if required)',
    'Book accommodation',
    'Purchase travel insurance',
    'Pack essentials',
    'Check passport validity',
    'Confirm airport transportation',
    'Download offline maps'
  ];

  const toggleItem = (index: number) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(index)) {
      newCheckedItems.delete(index);
    } else {
      newCheckedItems.add(index);
    }
    setCheckedItems(newCheckedItems);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Trip Checklist</h3>
      
      <div className="space-y-3">
        {checklistItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <button
              onClick={() => toggleItem(index)}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                checkedItems.has(index)
                  ? 'bg-green-500 border-green-500 text-white'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {checkedItems.has(index) && (
                <span className="text-xs">✓</span>
              )}
            </button>
            <span className={`${checkedItems.has(index) ? 'line-through text-gray-500' : 'text-gray-900'}`}>
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Progress</span>
          <span className="font-medium">{checkedItems.size}/{checklistItems.length} completed</span>
        </div>
        <div className="mt-2 bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(checkedItems.size / checklistItems.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TripChecklist;
