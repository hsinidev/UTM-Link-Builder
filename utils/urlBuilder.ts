
import type { UTMParams } from '../types';

export const buildUTMUrl = (baseUrl: string, params: UTMParams): string => {
  if (!baseUrl) {
    return '';
  }

  const filteredParams = Object.entries(params)
    .filter(([, value]) => value && value.trim() !== '')
    .reduce((acc, [key, value]) => {
      acc[`utm_${key}`] = value.trim();
      return acc;
    }, {} as Record<string, string>);

  if (Object.keys(filteredParams).length === 0) {
    return baseUrl;
  }

  try {
    const url = new URL(baseUrl);
    Object.entries(filteredParams).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
    return url.toString();
  } catch (error) {
    // Handle cases where baseUrl might not have a protocol
    // This is a fallback and the primary validation should be in the component
    const separator = baseUrl.includes('?') ? '&' : '?';
    const queryString = new URLSearchParams(filteredParams).toString();
    return `${baseUrl}${separator}${queryString}`;
  }
};
