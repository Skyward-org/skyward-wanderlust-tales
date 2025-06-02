
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
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Trip Checklist</h3>
      
      <div className="space-y-4">
        {checklistItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <button
              onClick={() => toggleItem(index)}
              className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                checkedItems.has(index)
                  ? 'bg-slate-700 border-slate-700 text-white shadow-md'
                  : 'border-slate-300 hover:border-slate-400'
              }`}
            >
              {checkedItems.has(index) && (
                <span className="text-sm">✓</span>
              )}
            </button>
            <span className={`text-lg ${checkedItems.has(index) ? 'line-through text-slate-500' : 'text-slate-800'}`}>
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-slate-200">
        <div className="flex justify-between text-sm mb-3">
          <span className="text-slate-600 font-medium">Progress</span>
          <span className="font-semibold text-slate-900">{checkedItems.size}/{checklistItems.length} completed</span>
        </div>
        <div className="bg-slate-200 rounded-full h-3">
          <div
            className="bg-slate-700 h-3 rounded-full transition-all duration-300 shadow-sm"
            style={{ width: `${(checkedItems.size / checklistItems.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TripChecklist;
