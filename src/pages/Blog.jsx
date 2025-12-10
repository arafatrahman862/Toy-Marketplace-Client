import React from 'react';

const Blog = () => {
    return (
        <section className="min-h-screen bg-slate-900/80 text-slate-100 py-10 md:py-14">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                {/* Header */}
                <header className="mb-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold">Blog</h1>
                    <p className="mt-3 text-sm md:text-base text-slate-400">
                        Short technical notes and concepts explained in simple terms.
                    </p>
                </header>

                <div className="space-y-6 md:space-y-8">
                    {/* Post 1 */}
                    <article className="bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl p-5 md:p-7">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">
                            What is an access token and refresh token? How do they work and
                            where should we store them on the client-side?
                        </h2>
                        <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed mb-3">
                            An access token and refresh token are commonly used in
                            authentication systems to verify the identity of a user and grant
                            access to protected resources.
                        </p>
                        <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed">
                            <span className="font-semibold text-slate-100">
                                Here&apos;s how the token flow generally works:
                            </span>
                            <br />
                            <span className="block mt-2">
                                <span className="font-semibold">1. User Authentication:</span>{' '}
                                The user provides their credentials (such as username and
                                password) to the authentication server.
                            </span>
                            <span className="block mt-1">
                                <span className="font-semibold">2. Token Issuance:</span> The
                                authentication server verifies the user&apos;s credentials and,
                                if valid, generates an access token and a refresh token.
                            </span>
                            <span className="block mt-1">
                                <span className="font-semibold">3. Access Token Usage:</span>{' '}
                                The client (e.g., a web or mobile application) includes the
                                access token in each request to the server&apos;s protected
                                resources.
                            </span>
                            <span className="block mt-1">
                                <span className="font-semibold">
                                    4. Access Token Expiration:
                                </span>{' '}
                                The server checks the access token&apos;s expiration time. If
                                the token is still valid, the server processes the request;
                                otherwise, it returns an error.
                            </span>
                        </p>
                    </article>

                    {/* Post 2 */}
                    <article className="bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl p-5 md:p-7">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">
                            Compare SQL and NoSQL databases
                        </h2>
                        <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed mb-3">
                            SQL (Structured Query Language) and NoSQL (Not only SQL) are two
                            different types of database management systems, each with its own
                            characteristics and use cases.
                        </p>

                        <div className="space-y-3 text-sm md:text-[15px] text-slate-300 leading-relaxed">
                            <div>
                                <span className="font-semibold text-slate-100">
                                    Data Model:
                                </span>
                                <p className="mt-1">
                                    <span className="font-semibold">SQL:</span> SQL databases use
                                    a structured data model where data is organized into tables
                                    with predefined schemas. Each table consists of rows and
                                    columns, and relationships between tables are defined using
                                    foreign keys.
                                </p>
                                <p className="mt-1">
                                    <span className="font-semibold">NoSQL:</span> NoSQL databases
                                    use various data models, such as key-value, document,
                                    columnar, or graph. These models provide more flexibility and
                                    allow for dynamic and unstructured data.
                                </p>
                            </div>

                            <div>
                                <span className="font-semibold text-slate-100">Scalability:</span>
                                <p className="mt-1">
                                    <span className="font-semibold">SQL:</span> SQL databases
                                    traditionally have vertical scalability (add more CPU/RAM to
                                    one server). Horizontal scaling across many servers is
                                    possible but more complex.
                                </p>
                                <p className="mt-1">
                                    <span className="font-semibold">NoSQL:</span> NoSQL databases,
                                    especially those with distributed architectures, are designed
                                    for horizontal scalability. They can handle large amounts of
                                    data and high traffic by adding more servers to a cluster.
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Post 3 */}
                    <article className="bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl p-5 md:p-7">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">
                            What is Express.js? What is NestJS?
                        </h2>
                        <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed">
                            <span className="font-semibold text-slate-100">Express.js:</span>{' '}
                            Express.js is a minimalistic and flexible web application
                            framework for Node.js. It provides a lightweight and
                            unopinionated approach to building web servers and APIs. It lets
                            developers handle HTTP requests, define routes, and manage
                            middleware with a simple, low-level API.
                        </p>
                        <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed mt-3">
                            <span className="font-semibold text-slate-100">NestJS:</span>{' '}
                            NestJS is a progressive Node.js framework built on top of
                            Express (or Fastify), using TypeScript and inspired by Angular&apos;s
                            architecture. It is opinionated, modular, and structured, making
                            it easier to build large-scale, maintainable server-side
                            applications.
                        </p>
                    </article>

                    {/* Post 4 */}
                    <article className="bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl p-5 md:p-7">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">
                            What is MongoDB aggregate and how does it work?
                        </h2>
                        <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed mb-2">
                            In MongoDB, the <span className="font-semibold">aggregate</span>{' '}
                            framework is a powerful tool used for data aggregation and
                            analysis. It allows you to perform complex operations on
                            collections of documents, including grouping, filtering,
                            transforming, and calculating aggregate values.
                        </p>
                        <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed">
                            The aggregation framework operates on the concept of{' '}
                            <span className="font-semibold">pipelines</span>. A pipeline is a
                            sequence of stages, and each stage applies a specific operation to
                            the input documents and passes the results to the next stage. By
                            chaining stages like <code className="px-1 py-0.5 bg-slate-800/80 rounded text-xs">{"$match"}</code>,{' '}
                            <code className="px-1 py-0.5 bg-slate-800/80 rounded text-xs">{"$group"}</code>,{' '}
                            <code className="px-1 py-0.5 bg-slate-800/80 rounded text-xs">{"$project"}</code>, etc., you can build powerful
                            data processing flows inside MongoDB.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Blog;
