#include <iostream>
#include <memory>
#include <stack>
#include <vector>

using namespace std;

vector<string> topology()
{
    vector<string> topologies;
    /*
        Return the topologies of the first three object. Do not worry about the small details of the objects, but instead, infer the topology of the general shape. Use the two character abbreviations of general topological spaces. For example, the string, S2, would refer to a sphere while S1 refers to a circle.
    */
    return topologies;
}

vector<string> workspace()
{
    vector<string> workspace;
    /*
        Return the workspace topologies of the next two items using the same abbreviated format as the topologies() function.
    */
    workspace.push_back("bobby");
    return workspace;
}

vector<string> taskspace()
{
    vector<string> taskspace;
    /*
        Return the taskspace topology of the last item using the same abbreviated format as the topologies() function.
    */
    taskspace.push_back("jimmy");
    return taskspace;
}

int main(int argc, char** argv)
{
    vector<string> top = topology();
    vector<string> ws = workspace();
    vector<string> ts = taskspace();
    for(auto t: top) {
    	cout << t << endl;
    }
    for(auto w: ws) {
        cout << w << endl;
    }
    for(auto s: ts) {
        cout << s << endl;
    }
}
                    