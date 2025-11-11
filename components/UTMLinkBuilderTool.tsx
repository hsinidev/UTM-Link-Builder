
import React, { useState, useMemo } from 'react';
import { buildUTMUrl } from '../utils/urlBuilder';

interface InputFieldProps {
    id: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    error?: string | null;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, placeholder, value, onChange, required = false, error }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
            {label} {required && <span className="text-red-400">*</span>}
        </label>
        <input
            type="text"
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            className={`w-full bg-gray-900/50 border ${error ? 'border-red-500' : 'border-gray-600'} text-white rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200 px-4 py-2.5`}
            placeholder={placeholder}
        />
        {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
);

const UTMLinkBuilderTool: React.FC = () => {
    const [baseUrl, setBaseUrl] = useState('');
    const [source, setSource] = useState('');
    const [medium, setMedium] =useState('');
    const [campaign, setCampaign] = useState('');
    const [term, setTerm] = useState('');
    const [content, setContent] = useState('');
    const [generatedUrl, setGeneratedUrl] = useState('');
    const [copied, setCopied] = useState(false);

    const [errors, setErrors] = useState<{ [key: string]: string | null }>({
        baseUrl: null,
        source: null,
        medium: null,
    });

    const utmParams = useMemo(() => ({ source, medium, campaign, term, content }), [source, medium, campaign, term, content]);

    const validate = (): boolean => {
        const newErrors: { [key: string]: string | null } = {};
        let isValid = true;
        
        if (!baseUrl.trim()) {
            newErrors.baseUrl = 'Website URL is required.';
            isValid = false;
        } else if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
            newErrors.baseUrl = 'URL must start with http:// or https://';
            isValid = false;
        }

        if (!source.trim()) {
            newErrors.source = 'UTM Source is required.';
            isValid = false;
        }

        if (!medium.trim()) {
            newErrors.medium = 'UTM Medium is required.';
            isValid = false;
        }
        
        setErrors(newErrors);
        return isValid;
    };

    const handleGenerate = () => {
        if (validate()) {
            const url = buildUTMUrl(baseUrl, utmParams);
            setGeneratedUrl(url);
            setCopied(false);
        } else {
            setGeneratedUrl('');
        }
    };
    
    const handleCopy = () => {
        if (generatedUrl) {
            navigator.clipboard.writeText(generatedUrl).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        }
    };

    return (
        <div className="bg-black/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-purple-500/10 overflow-hidden">
            <div className="p-6 sm:p-8">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        UTM Link Builder
                    </h1>
                    <p className="mt-2 text-lg text-gray-300">Instantly generate trackable marketing URLs.</p>
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <InputField id="baseUrl" label="Website URL" placeholder="https://www.example.com" value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} required error={errors.baseUrl} />
                    </div>
                    <InputField id="source" label="UTM Source" placeholder="e.g., google, newsletter" value={source} onChange={(e) => setSource(e.target.value)} required error={errors.source} />
                    <InputField id="medium" label="UTM Medium" placeholder="e.g., cpc, email" value={medium} onChange={(e) => setMedium(e.target.value)} required error={errors.medium} />
                    <InputField id="campaign" label="UTM Campaign" placeholder="e.g., summer_sale_2025" value={campaign} onChange={(e) => setCampaign(e.target.value)} />
                    <InputField id="term" label="UTM Term" placeholder="Paid search keywords" value={term} onChange={(e) => setTerm(e.target.value)} />
                    <InputField id="content" label="UTM Content" placeholder="A/B testing ad variations" value={content} onChange={(e) => setContent(e.target.value)} />
                </div>

                <div className="mt-8">
                    <button 
                        onClick={handleGenerate}
                        className="w-full text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-lg py-3.5 px-5 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                        Generate Trackable Link
                    </button>
                </div>

                {generatedUrl && (
                    <div className="mt-8 p-4 bg-gray-900/70 border border-gray-600 rounded-lg">
                        <label htmlFor="generatedUrl" className="block text-sm font-medium text-gray-300 mb-2">Final Generated URL</label>
                        <div className="relative">
                            <textarea
                                id="generatedUrl"
                                readOnly
                                value={generatedUrl}
                                className="w-full h-24 bg-gray-800 border border-gray-700 text-green-400 font-mono text-sm rounded-md p-3 pr-28 resize-none focus:outline-none"
                            />
                            <button
                                onClick={handleCopy}
                                className="absolute top-1/2 right-3 -translate-y-1/2 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-md py-2 px-4 transition-colors text-sm">
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UTMLinkBuilderTool;
