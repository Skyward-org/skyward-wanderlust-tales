
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CircleCheck, Clock } from 'lucide-react';

const TripChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set([0, 1]));

  const checklistItems = [
    { task: 'Check-in', daysLeft: null },
    { task: 'Boarding Pass', daysLeft: null },
    { task: 'Arrange Transportation', daysLeft: 2 },
    { task: 'Pack Luggage', daysLeft: 1 },
    { task: 'Purchase Travel Insurance', daysLeft: 3 },
    { task: 'Download Offline Maps', daysLeft: 1 }
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
    <Card className="mb-6">
      <CardContent className="p-6">
        <h4 className="text-lg font-semibold mb-3">Trip Checklist</h4>
        <div className="space-y-2">
          {checklistItems.map((item, index) => {
            const isCompleted = checkedItems.has(index);
            return (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                  isCompleted
                    ? 'bg-green-50 border-green-100'
                    : 'bg-gray-50 border-gray-100'
                }`}
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center">
                  <div className={`rounded-full p-1 mr-3 ${
                    isCompleted ? 'bg-green-100' : 'bg-gray-200'
                  }`}>
                    <CircleCheck className={`h-5 w-5 ${
                      isCompleted ? 'text-green-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <span className={isCompleted ? 'text-gray-800' : 'font-medium'}>
                    {item.task}
                  </span>
                </div>
                <div className="flex items-center">
                  {isCompleted ? (
                    <Badge className="bg-green-100 text-green-800 border-transparent hover:bg-green-100">
                      Completed
                    </Badge>
                  ) : item.daysLeft ? (
                    <>
                      <Clock className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-600">{item.daysLeft} days left</span>
                    </>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default TripChecklist;
