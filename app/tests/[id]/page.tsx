"use client";
import React, { useEffect, useState } from 'react';
import BaseCard from '@/src/components/base/BaseCard';
import { useParams } from 'next/navigation';
import testData from "@/constants/tests.json"

const Page = () => {
    const { id } = useParams();
    const [test, setTest] = useState<any>({});
    useEffect(() => {
        const test = testData.filter((elt: any) => elt.id === id)[0];
        setTest(test);
    }, [id]);


    return (
        <div>
            <BaseCard>
            <span>{test?.title}</span>
            </BaseCard>
        </div>
    );
}

export default Page;
