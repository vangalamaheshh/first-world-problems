cmd_Release/binding.node := ./gyp-mac-tool flock ./Release/linker.lock c++ -bundle -Wl,-search_paths_first -mmacosx-version-min=10.5 -arch x86_64 -L./Release  -o Release/binding.node Release/obj.target/binding/src/binding.o -undefined dynamic_lookup -lpq -L/usr/local/Cellar/postgresql/9.3.2/lib
