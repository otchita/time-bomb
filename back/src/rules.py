"""Rules file."""
from back.src.player import Role

ROLE_MAPPING = {4: {Role.SHERLOCK: 3, Role.MORIARTY: 2},
                5: {Role.SHERLOCK: 3, Role.MORIARTY: 2},
                6: {Role.SHERLOCK: 4, Role.MORIARTY: 2},
                7: {Role.SHERLOCK: 5, Role.MORIARTY: 3},
                8: {Role.SHERLOCK: 5, Role.MORIARTY: 3}
                }