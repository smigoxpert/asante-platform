'use client';

import { useState, useEffect } from 'react';
import { useStorageContext } from '@/components/providers/storage-provider';
import { Button } from './button';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Progress } from './progress';
import { Trash2, RefreshCw, AlertTriangle } from 'lucide-react';

export function StorageMonitor() {
  const { cleanup, getSize, clearAll, isStorageAvailable } = useStorageContext();
  const [storageSize, setStorageSize] = useState({ local: 0, session: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setStorageSize(getSize());
  }, [getSize]);

  const totalSize = storageSize.local + storageSize.session;
  const maxSize = 5 * 1024 * 1024; // 5MB
  const usagePercentage = (totalSize / maxSize) * 100;

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleCleanup = () => {
    cleanup();
    setStorageSize(getSize());
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear all storage? This will log you out and reset all preferences.')) {
      clearAll();
      setStorageSize(getSize());
    }
  };

  // Only show in development or when explicitly enabled
  if (!isVisible && process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsVisible(!isVisible)}
        className="mb-2"
      >
        Storage Monitor
      </Button>
      
      {isVisible && (
        <Card className="w-80 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Storage Usage
              {!isStorageAvailable && (
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Local Storage</span>
                <span>{formatBytes(storageSize.local)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Session Storage</span>
                <span>{formatBytes(storageSize.session)}</span>
              </div>
              <div className="flex justify-between text-xs font-medium">
                <span>Total</span>
                <span>{formatBytes(totalSize)}</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Usage</span>
                <span>{usagePercentage.toFixed(1)}%</span>
              </div>
              <Progress value={usagePercentage} className="h-2" />
              {usagePercentage > 80 && (
                <p className="text-xs text-yellow-600 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  Storage usage is high
                </p>
              )}
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCleanup}
                className="flex-1"
              >
                <Trash2 className="w-3 h-3 mr-1" />
                Cleanup
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleClearAll}
                className="flex-1"
              >
                Clear All
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 