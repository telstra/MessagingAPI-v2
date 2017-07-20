from setuptools import setup, find_packages

# Try to convert markdown README to rst format for PyPI.
try:
    import pypandoc
    long_description = pypandoc.convert('README.md', 'rst')
except(IOError, ImportError):
    long_description = open('README.md').read()

setup(
    name='telstrasmsmessagingapi',
    version='2.1.0',
    description='The Telstra SMS Messaging API allows your applications to send and receive SMS text messages from Australia's leading network operator. It also allows your application to track the delivery status of both sent and received SMS messages. ',
    long_description=long_description,
    author='APIMatic SDK Generator',
    author_email='support@apimatic.io',
    url='https://apimatic.io/',
    packages=find_packages(),
    install_requires=[
        'requests>=2.9.1, <3.0',
        'jsonpickle>=0.7.1, <1.0',
        'cachecontrol>=0.11.7, <1.0',
        'python-dateutil>=2.5.3, <3.0'
    ],
    tests_require=[
        'nose>=1.3.7'
    ],
    test_suite = 'nose.collector'
)