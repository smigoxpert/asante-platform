"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { LoadingButton } from "./loading";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: (plan: string) => void;
  onPurchaseResults: () => void;
  featureName: string;
  isLoading?: boolean;
}

export function SubscriptionModal({
  isOpen,
  onClose,
  onSubscribe,
  onPurchaseResults,
  featureName,
  isLoading = false
}: SubscriptionModalProps) {
  if (!isOpen) return null;

  const plans = [
    {
      id: "monthly",
      name: "Monthly Pro",
      price: "$19.99",
      period: "month",
      features: [
        "Full access to all Heritage features",
        "Unlimited wisdom paths",
        "Priority community access",
        "Advanced analytics",
        "Download reports"
      ],
      popular: false
    },
    {
      id: "annual",
      name: "Annual Pro",
      price: "$199.99",
      period: "year",
      features: [
        "Everything in Monthly Pro",
        "2 months free",
        "Exclusive content access",
        "Personal heritage consultation",
        "Family tree builder"
      ],
      popular: true
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-heritage-gold to-heritage-bronze rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <Badge className="bg-gradient-to-r from-heritage-gold to-heritage-bronze text-white border-0">
              Premium Feature
            </Badge>
          </div>
          <CardTitle className="text-3xl font-ubuntu font-bold bg-gradient-to-r from-heritage-gold via-orange-600 to-red-600 bg-clip-text text-transparent">
            Unlock {featureName}
          </CardTitle>
          <CardDescription className="text-lg font-ubuntu text-gray-600">
            Get full access to advanced heritage analysis and personalized insights
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Subscription Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={`relative border-2 transition-all duration-300 hover:shadow-lg ${
                  plan.popular 
                    ? 'border-heritage-gold bg-gradient-to-br from-heritage-gold/5 to-orange-50' 
                    : 'border-gray-200 hover:border-heritage-gold/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-heritage-gold text-white border-0 px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-ubuntu font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-3xl font-ubuntu font-bold text-heritage-gold">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 font-ubuntu">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-heritage-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm font-ubuntu text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <LoadingButton
                    className="w-full heritage-gradient hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 font-ubuntu font-semibold text-white py-3"
                    loading={isLoading}
                    loadingText="Processing..."
                    onClick={() => onSubscribe(plan.id)}
                  >
                    Choose {plan.name}
                  </LoadingButton>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-ubuntu">Or</span>
            </div>
          </div>

          {/* Purchase Results Only */}
          <Card className="border-2 border-dashed border-heritage-gold/50 bg-gradient-to-br from-heritage-gold/5 to-orange-50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-ubuntu font-bold text-gray-900 mb-2">
                Purchase Results Only
              </h3>
              <p className="text-gray-600 font-ubuntu mb-4">
                Get your personalized heritage analysis without a subscription
              </p>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-2xl font-ubuntu font-bold text-heritage-gold">$49.99</span>
                <span className="text-gray-500 font-ubuntu">one-time</span>
              </div>
              <LoadingButton
                className="heritage-gradient hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 font-ubuntu font-semibold text-white px-8 py-3"
                loading={isLoading}
                loadingText="Processing..."
                onClick={onPurchaseResults}
              >
                Purchase Results
              </LoadingButton>
            </CardContent>
          </Card>

          {/* Close Button */}
          <div className="text-center">
            <Button
              variant="outline"
              onClick={onClose}
              className="border-heritage-gold/30 text-heritage-gold hover:bg-heritage-gold/10 font-ubuntu"
            >
              Maybe Later
            </Button>
          </div>
        </CardContent>
      </div>
    </div>
  );
} 